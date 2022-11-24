import { DataStore } from "../pages/data/Store";

export default defineNuxtRouteMiddleware((to,form)=>{
   const store = DataStore(); 
   const StoreData = store.getMyData;
  //check data in store for navigate to new page
   if(!StoreData){
      return navigateTo('/data/');
   }
})