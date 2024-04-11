import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: () => import("../layouts/BaseLayout.vue"),
      children: [
        {
          path: "",
          name: "landing",
          component: () => import("../views/LandingPage.vue"),
        },
        {
          path: "facials",
          name: "facials-page",
          component: () => import("../views/Facials.vue"),
        },
        {
          path: "massages",
          name: "massages-page",
          component: () => import("../views/Massages.vue"),
        },
        {
          path: "specialServices",
          name: "special-services",
          component: () => import("../views/SpecialServices.vue"),
        },
      ],
    },
  ],
});

export default router;
