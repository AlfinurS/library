import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/favorites",
    name: "FavoritesPage",
    component: () => import("@/components/FavoritesPage.vue"),
  },
  {
    path: "/book/:id",
    name: "BookDetailsPage",
    component: () => import("@/components/BookDetailsPage.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;