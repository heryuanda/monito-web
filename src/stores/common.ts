import { defineStore } from "pinia";

interface CommonState {
  isMobile: boolean;
}

export const useCommonStore = defineStore({
  id: "common",
  state: (): CommonState => ({
    isMobile: false,
  }),
  getters: {},
  actions: {
    setIsMobile(condition: boolean): void {
      this.isMobile = condition;
    },
  },
});
