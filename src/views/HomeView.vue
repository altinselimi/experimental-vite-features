<script setup>
import { useRouter } from "vue-router";
import { computed, onBeforeUnmount, ref, onMounted, nextTick } from "vue";
import ShowsListView from "../components/ShowsListView.vue";
import ShowsListViewSkeleton from "../components/ShowsListViewSkeleton.vue";
import { useShowsStore } from "../stores/shows.js";
import { Search } from "lucide-vue-next";
const store = useShowsStore();
const router = useRouter();

onMounted(() => {
  if (!listScrollPositions.value?.homeView) return;
  document.documentElement.scrollTop = listScrollPositions.value.homeView;
});

const hasLoadedShows = computed(() => store.hasLoadedShows);
const showsLists = computed(() => [
  {
    name: "comedy shows",
    key: "comedyShows",
    list: store.comedyShows,
  },
  {
    name: "adventure shows",
    key: "adventureShows",
    list: store.adventureShows,
  },
  {
    name: "drama shows",
    key: "dramaShows",
    list: store.dramaShows,
  },
  {
    name: "mystery shows",
    key: "mysteryShows",
    list: store.mysteryShows,
  },
]);

const showListRefs = ref([]);

const handleSelectShow = (show) => {
  router.push({ name: "about", params: { id: show.id } });
};

const updateScrollValue = ({ key, value }) => {
  store.updateListScrollPosition({ key, value });
};

onBeforeUnmount(() => {
  updateScrollValue({
    key: "homeView",
    value: document.documentElement.scrollTop,
  });
});

const listScrollPositions = computed(() => store.listScrollPositions);
</script>
<template>
  <div style="display: flex; flex-direction: column">
    <div class="movie-app__header">
      <div class="movie-app__header-content">
        <div class="movie-app__logo">SHOWS APP</div>
        <button class="is-plain" style="margin-left: auto">
          <Search />
        </button>
      </div>
    </div>
    <div class="home-view__wrapper" v-if="hasLoadedShows">
      <ShowsListView
        :name="showsList.name"
        :shows="showsList.list"
        :id="showsList.key"
        :initialScrollLeft="listScrollPositions[showsList.key]"
        ref="showListRefs"
        @selectShow="handleSelectShow"
        @updateScrollValue="updateScrollValue"
        v-for="showsList in showsLists"
      />
    </div>
    <ShowsListViewSkeleton v-else />
  </div>
</template>
<style lang="scss">
.movie-app {
  &__header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
    height: var(--header-height);
    background-color: rgba(22, 22, 22, 0.34);
    backdrop-filter: blur(20px);
    &-content {
      margin: 0 auto;
      width: 100%;
      max-width: var(--app-max-width);
      display: flex;
      align-items: center;
      padding: 20px 40px;
    }
    svg {
      stroke: white;
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  &__logo {
    font-size: 1.8rem;
    color: white;
    font-weight: 700;
  }
}
.home-view {
  &__wrapper {
    margin-top: 100px;
  }
}
</style>
