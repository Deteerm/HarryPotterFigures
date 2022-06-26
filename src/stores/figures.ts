import { defineStore } from "pinia";
import type FigureType from "@/types/FigureType";

export interface State {
  figures: FigureType[];
  selectedFigureSetNum: string;
}

export const useStore = defineStore({
  id: "figures",
  state: (): State => ({
    figures: [],
    selectedFigureSetNum: "",
  }),
});
