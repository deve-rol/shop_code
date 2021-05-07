import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: () => import("../views/Catalog/Catalog"),
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("../views/Basket/Basket"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
