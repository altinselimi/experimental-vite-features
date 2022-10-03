<script setup>
import { useShowsStore } from "./stores/shows.js";
const { fetchAllShows } = useShowsStore();
fetchAllShows();
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
:root {
  --app-header-height: 86px;
}
body {
  overflow: auto;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(white, 0.4);
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
}
#app {
  max-width: var(--app-max-width);
  width: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  font-weight: normal;
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
}

button {
  cursor: pointer;
  &.is-plain {
    border: none;
    padding: 0px;
    margin: 0px;
    background-color: transparent;
  }
}
</style>
