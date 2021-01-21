<template>
  <div class="movie-main-view">
    <movie-search />
    <movie-catalog />
  </div>
</template>

<script>
import movieCatalog from "../components/movie-catalog";
import MovieSearch from "../components/movie-search.vue";

export default {
  components: {
    movieCatalog,
    MovieSearch,
  },
  name: "MainView",
};
</script>

<style lang="scss" scoped></style>
