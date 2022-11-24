<template>
    <div>
      <h1 class=" font-bold">List</h1>
      <div
      v-for="item,index in Datalist">
      <nuxt-link :to="`/data/`+index"
      :key="index">
      <div>
        Note No - <span class="text-blue-600  h-20 w-40">{{index+1}}</span>
      </div>
      <br>
      <div>
        Heading - <span class="text-blue-600  h-20 w-40"> {{item.TitleOfTask}}</span>
      </div>
      <div>
        <br>
        description - <span class="text-blue-600 h-20 w-40"> {{item.Description}}</span>
      </div>
      <br>
      <br>
      
      </nuxt-link>
      </div>
    
        
      </div>
  
      <nuxt-link to="/data/" class="text-blue-500 absolute top-20 left-60"
        >back</nuxt-link
      >
   
  </template>
  <script setup lang="ts">
  import { DataStore } from "./Store";
  const store = DataStore();
  const Datalist = store.getMyData;
  //console.log(Datalist)
  definePageMeta({
    middleware:"middleware", //middleware
  })
 
  </script>