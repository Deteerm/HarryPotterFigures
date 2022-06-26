import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import ShipmentView from "@/views/ShipmentView.vue";
import FiguresView from "@/views/FiguresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/figures",
      name: "figures",
      component: FiguresView,
    },
    {
      path: "/shipment",
      name: "shipment",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ShipmentView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
