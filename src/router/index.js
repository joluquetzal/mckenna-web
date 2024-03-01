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
      ],
    },
    {
      path: "/views",
      component: () => import("../layouts/BaseLayout.vue"),
      children: [
        {
          path: "learn",
          name: "learn",
          component: () => import("../views/Learn.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("../views/Contact.vue"),
        },
        {
          path: "design",
          nae: "design",
          component: () => import("../views/Design.vue"),
        },
        {
          path: "service",
          name: "service",
          component: () => import("../views/Service.vue"),
        },
        {
          path: "extras",
          name: "extras",
          component: () => import("../views/Extras.vue"),
        },
        {
          path: "contact/laborContact",
          name: "labor-contact",
          component: () => import("../views/LaborContact.vue"),
        },
      ],
    },
  ],
});

export default router;
