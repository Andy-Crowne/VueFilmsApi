import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/movie-catalog")
  },
  {
    path: "/:id",
    name: "filmPage",
    component: () => import("../components/movie-catalog-film")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
