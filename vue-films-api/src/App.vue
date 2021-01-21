<template>
  <div id="app">
    <movie-header />
    <router-view />
  </div>
</template>

<script>
import MovieHeader from "./components/movie-header.vue";
export default {
  name: "app",
  components: { MovieHeader },
};
</script>

<style lang="scss">
</style>
