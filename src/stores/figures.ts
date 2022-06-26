import { defineStore } from "pinia";
import type FigureType from "@/types/FigureType";

export interface State {
  figures: FigureType[];
}

export const useStore = defineStore({
  id: "figures",
  state: (): State => ({
    figures: [],
  }),
});
