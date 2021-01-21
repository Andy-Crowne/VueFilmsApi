<template>
  <div class="movie-preloader">
    <img :src="preloader" alt="" class="rotate-center" />
  </div>
</template>

<script>
import preloader from "../assets/img/Loader.png";
export default {
  name: "movie-preloader",
  data() {
    return {
      preloader,
    };
  },
};
</script>

<style lang="scss" scoped>
.rotate-center {
  -webkit-animation: rotate-center 1s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    forwards;
  animation: rotate-center 1s cubic-bezier(0.755, 0.05, 0.855, 0.06) forwards;
  animation-iteration-count: 100;
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>