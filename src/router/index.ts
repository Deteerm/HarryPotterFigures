import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "@/stores/figures";
import HomeView from "@/views/HomeView.vue";
import ShipmentView from "@/views/ShipmentView.vue";
import FiguresView from "@/views/FiguresView.vue";
import ErrorView from "@/views/ErrorView.vue";

import type { State } from "@/stores/figures";

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
      beforeEnter: () => {
        const store: State = useStore();
        if (store.figures.length === 0) {
          return { name: "home" };
        }
      },
    },
    {
      path: "/shipment",
      name: "shipment",
      component: ShipmentView,
      beforeEnter: () => {
        const store: State = useStore();
        if (store.selectedFigure.setNum === "") {
          return { name: "home" };
        }
      },
    },
    {
      path: "/error",
      name: "error",
      component: ErrorView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
