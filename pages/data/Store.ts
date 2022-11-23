import { defineStore } from "pinia";

const state = {
  Data: ""
}

export const useDataStore = defineStore("Data", {
  state: () => state,
  actions: {
    setMyData(data: any) {
      this.Data = data
    }
  },
  getters: {
    getMyData(): any {
      return this.Data
    }
  }

})