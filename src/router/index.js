import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/heroes",
    name: "heroes",
    meta: {
      title: "Heroes",
    },
    component: () => import("@/views/Heroes.vue"),
  },
  {
    path: "/anti-heroes",
    name: "anti-heroes",
    meta: {
      title: "Anti-Heroes",
    },
    component: () => import("@/views/AntiHeroes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
