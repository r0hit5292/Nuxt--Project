<template>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
    <input class="border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 " type="text" v-model="TitleOfTask">
    <p>describe </p>
    <textarea class=" border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600" v-model="Description"></textarea>
    <button @click="Submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring-4 focus:outline-none focus:ring-blue-300">
 Submit
</button>
<nuxt-link to="/data/list" class=" text-red-500  hover:text-blue-700 absolute right-8 top-24"> Show list</nuxt-link>
      
</template>
<script setup lang="ts">


  
  let Data = ref<{TitleOfTask:string,Description:string}[]>([
    
   ]); 
const TitleOfTask =ref<string>("");
    const Description =ref<string>("");
function Submit(){
   //alert for empty submission
if(!TitleOfTask.value){
    alert("please write in title first");
}
else if(!Description.value){
    alert("please describe task also")
}
else{
    Data.value.push(TitleOfTask.value,Description.value);
}
console.log(Data.value.length);
TitleOfTask.value =="";
Description.value ="";
}
</script>