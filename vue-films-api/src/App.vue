<template>
  <div id="app">
    <movie-header />
    <main-view />
  </div>
</template>

<script>
import MovieHeader from "./components/movie-header.vue";
import MainView from "./views/MainView";
export default {
  name: "app",
  components: { MainView, MovieHeader }
};
</script>

<style lang="scss"></style>
