import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
