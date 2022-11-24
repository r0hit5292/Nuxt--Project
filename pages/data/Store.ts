import { defineStore } from "pinia";

const state = {
  Data:[{TitleOfTask:"",Description:""}]
}

export const DataStore = defineStore("Data", {
  state: () => state,
  actions: {
    setMyData(data: {TitleOfTask:string,Description:string}[]) {
      this.Data = data
    }
  },
  getters: {
    getMyData(): {TitleOfTask:string,Description:string}[] {
      return this.Data
    }
  }

})