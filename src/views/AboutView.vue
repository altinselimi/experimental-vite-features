<script setup>
import { ChevronLeft } from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useShowsStore } from "../stores/shows.js";
const store = useShowsStore();
const route = useRoute();
const router = useRouter();

const show = computed(() => store.showsById[route.params.id]);
</script>
<template>
  <div class="about-show__wrapper" v-if="show">
    <div class="about-show__title">
      <button
        class="is-plain about-show__go-back"
        style="margin-right: 8px"
        @click="router.go(-1)"
      >
        <ChevronLeft />
      </button>
      <h4>{{ show.name }}</h4>
    </div>
    <div class="about-show__content">
      <img class="about-show__image" :src="show.image.original" />
      <div class="about-show__show-details">
        <div v-html="show.summary"></div>
        <ul class="about-show__list">
          <li>Genres</li>
          <li>
            {{ show.genres.join(", ") }}
          </li>
          <li>Rating</li>
          <li>{{ show.rating.average }}/10</li>
          <li>Language</li>
          <li>
            {{ show.language }}
          </li>
          <li>Premiered</li>
          <li>
            {{ show.premiered }}
          </li>
          <li>Status</li>
          <li>
            {{ show.status }}
          </li>
          <li>Link</li>
          <li>
            <a :href="show.url" target="_blank" style="color: white">{{
              show.name
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-show {
  &__go-back {
    display: inline-flex;
    svg {
      stroke: white;
      width: 34px;
      height: 34px;
    }
  }
  &__title {
    color: white;
    display: flex;
    align-items: center;
    height: var(--app-header-height);
    h4 {
      font-weight: 600;
      font-size: 2rem;
    }
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    p {
      color: white;
      font-size: 1rem;
    }
  }
  &__image {
    flex: 1;
    flex-shrink: 0;
    width: 0px;
    min-width: 300px;
    max-width: 100%;
    display: inline-flex;
    align-self: flex-start;
    margin-right: 40px;
    margin-bottom: 40px;
  }
  &__show-details {
    display: inline-flex;
    flex-direction: column;
    min-width: 300px;
    flex: 2;
    flex-shrink: 0;
  }
  &__list {
    list-style: none;
    margin: 0px;
    margin-top: 20px;
    max-width: 300px;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    li {
      font-size: 1rem;
      text-transform: capitalize;
      padding: 10px 0px;
    }
    li:nth-child(odd) {
      margin-right: 20px;
    }
    li:nth-child(even) {
      color: white;
    }
    li:first-child,
    li:nth-child(2) {
      padding-top: 0px;
    }
  }
}
</style>
