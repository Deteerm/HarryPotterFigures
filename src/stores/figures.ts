import { defineStore } from "pinia";
import type FigureType from "@/types/FigureType";

export interface State {
  figures: FigureType[];
  selectedFigure: {
    setNum: string;
    setImgUrl: string;
    name: string;
  };
  homePageMsg: string;
}

export const useStore = defineStore({
  id: "figures",
  state: (): State => ({
    figures: [],
    selectedFigure: {
      setNum: "",
      setImgUrl: "",
      name: "",
    },
    homePageMsg: "",
  }),
});
