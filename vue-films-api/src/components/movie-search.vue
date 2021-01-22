<template>
  <div class="movie-search">
    <h2>Фильмы</h2>
    <div class="chexbox">
      <input type="checkbox" id="sortByName" name="scales" />
      <label for="sortByName">Отсортировать по названию</label>
      <input type="checkbox" id="sortByYear" name="scales" />
      <label for="sortByYear">Отсортировать по году</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "movie-search"
};
</script>

<style lang="scss" scoped>
.chexbox {
  float: left;
  margin-top: 16px;
  label {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #c4c4c4;
  }
}
</style>
