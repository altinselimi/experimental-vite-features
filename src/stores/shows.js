import { ref, computed } from "vue";
import { defineStore } from "pinia";
const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

export const useShowsStore = defineStore("shows", () => {
  const comedyShows = ref(null);
  const adventureShows = ref(null);
  const dramaShows = ref(null);
  const mysteryShows = ref(null);
  const showsById = ref({});
  const listScrollPositions = ref({});
  const hasLoadedShows = ref(false);

  const fetchAllShows = () => {
    worker.postMessage("fetchMovies");
  };

  const updateListScrollPosition = ({ key, value }) => {
    listScrollPositions.value[key] = value;
  };

  worker.addEventListener("message", ({ data }) => {
    comedyShows.value = data.comedyShows;
    adventureShows.value = data.adventureShows;
    dramaShows.value = data.dramaShows;
    mysteryShows.value = data.mysteryShows;
    showsById.value = data.showsById;
    hasLoadedShows.value = true;
  });

  return {
    showsById,
    fetchAllShows,
    comedyShows,
    mysteryShows,
    dramaShows,
    adventureShows,
    listScrollPositions,
    updateListScrollPosition,
    hasLoadedShows,
  };
});
