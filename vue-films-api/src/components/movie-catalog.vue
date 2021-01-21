<template>
  <div class="movie-catalog">
    <movie-preloader v-if="show" />
    <movie-catalog-film
      v-for="(movie, index) in this.$store.state.films.data"
      :key="index"
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
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "movie-catalog",
  components: {
    MovieCatalogFilm,
    MoviePreloader,
  },
  props: {},
  data() {
    return {
      show: true,
      movieList: [],
    };
  },
  beforeMount() {
    axios
      .get("https://floating-sierra-20135.herokuapp.com/api/movies")
      .then((response) => {
        this.movieList = response.data;
        this.show = !this.show;
      });
  },
  methods: {
    ...mapActions(["GET_FILMS_FROM_API"]),
    showMovie(index) {
      console.log(index);
    },
  },
  mounted() {
    this.GET_FILMS_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
</style>