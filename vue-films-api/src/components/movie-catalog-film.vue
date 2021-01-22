<template>
  <div>
    <router-link :to="{ name: 'filmPage', params: { id: id } }">
      <div class="movie-catalog-film" @click="showMovie">
        <div class="movie-catalog-film-card-img">
          <img :src="poster" alt="" />
        </div>
        <div class="movie-catalog-film-right-block">
          <div class="movie-catalog-film-first-block">
            <div class="movie-catalog-film-main-h2">
              <h2>{{ title }}</h2>
            </div>
            <div class="movie-catalog-film-main-flag">
              <div class="movie-catalog-film-rectangle"></div>
            </div>
          </div>
          <div class="movie-catalog-film-description">
            <div class="movie-catalog-film-first-desc">
              <div class="movie-catalog-film-inline">
                <p>{{ year }},</p>
                <p v-for="(gen, index) in genres" :key="index">{{ gen }},</p>
              </div>
            </div>
            <div class="movie-catalog-film-second-desc">
              <p>РЕЖИСЁР:</p>
              <p v-for="(der, index) in directors" :key="index">{{ der }},</p>
            </div>
            <div class="movie-catalog-film-second-desc">
              <p>Актеры:</p>
              <p v-for="(actor, index) in actors" :key="index">{{ actor }},</p>
            </div>
            <div class="movie-catalog-film-third-desc">
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "movie-catalog-film",
  props: {
    id: Number,
    poster: String,
    title: {
      type: String,
      default: "Где то заголовок"
    },
    genres: Array,
    actors: Array,
    directors: Array,
    year: Number,
    description: String,
    destination: String
  },
  methods: {
    showMovie() {
      this.$emit("showMovie");
    }
  }
};
</script>

<style lang="scss" scoped></style>
