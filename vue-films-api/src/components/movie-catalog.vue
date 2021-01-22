<template>
  <div class="movie-catalog">
    <movie-search />
    <movie-preloader v-if="show" />
    <movie-catalog-film
      v-for="(movie, index) in getFILMS.data"
      :key="index"
      :id="movie.id"
      :title="movie.title"
      :year="movie.year"
      :genres="movie.genres"
      :poster="movie.poster"
      :directors="movie.directors"
      :actors="movie.actors"
      :description="movie.description"
      @showMovie="showMovie(movie.id)"
    />
  </div>
</template>

<script>
import MovieCatalogFilm from "./movie-catalog-film.vue";
import MoviePreloader from "./movie-preloader.vue";
//import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import MovieSearch from "./movie-search";

export default {
  name: "movie-catalog",
  components: {
    MovieSearch,
    MovieCatalogFilm,
    MoviePreloader
  },
  props: {},
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapGetters(["getFILMS"])
  },
  methods: {
    ...mapActions(["GET_FILMS_FROM_API"]),
    showMovie(index) {
      console.log(index);
    }
  },
  mounted() {
    this.GET_FILMS_FROM_API();
  },
  async beforeMount() {
    this.show = true;
    await this.GET_FILMS_FROM_API();
    this.show = false;
  }
};
</script>

<style lang="scss" scoped></style>
