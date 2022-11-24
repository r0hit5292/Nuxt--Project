import { defineStore } from "pinia";

const state = {
  Data: ""
}

export const DataStore = defineStore("Data", {
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