<template> 
  <div class="text-center">

      <h1 class=" font-bold">Task {{idNumber}}</h1>
      <span>Title:</span>
<p class=" bg-slate-400">{{title}}</p>
<br>
<br>
<span>Description:</span>
<p class=" bg-orange-300">{{description}}</p>
      </div>
  </template>
  
  <script setup lang="ts">
  import {DataStore } from "./Store";
  const store = DataStore();   
  const {id} =useRoute().params;
  const data = store.getMyData;
  const idNumber = Number(id)+1;
  
 //to get data of title and description
   const title = data[idNumber-1].TitleOfTask;
   const description = data[idNumber-1].Description;
     
  </script>
