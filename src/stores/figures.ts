import { defineStore } from "pinia";

interface State {
  figures: any[];
}

export const useStore = defineStore({
  id: "figures",
  state: (): State => ({
    figures: [],
  }),
});
