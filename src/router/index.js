// Vue router components
import { createRouter, createWebHistory } from "vue-router";

// Static import of the Vue Component
import HomeView from "../views/HomeView.vue";

// Vue Router usage
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "404",
      path: "/:pathMatch(.*)*",
      // Dynamic import of Vue Component
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "404 - Page Not Found",
      },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Albums Overview",
      },
    },
  ],
});

export default router;
