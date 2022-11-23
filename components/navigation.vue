<!-- Code for Navigation Route -->
<template>
  <div class="">
    
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <ul class=" inline border border-gray-100 rounded-lg bg-gray-50 ">
          <div class="">
           
            <li>
              <NuxtLink class=" self-center inline-flex  text-gray-700 rounded hover:bg-gray-100 "  to="/">Menu</NuxtLink>
      </li>
      <li>
        <NuxtLink class="self-center inline-flex   text-gray-700 rounded hover:bg-gray-100 "  to="/Note">Dashboard</NuxtLink>
      </li>

            <li>
              <NuxtLink  class="self-center inline-flex  text-gray-700 rounded hover:bg-gray-100"  to="/data">Note</NuxtLink>
      </li>
        </div>
        </ul>
  <ul >
        <NuxtPage/>
  </ul>
      </nav>
    </div>
  </template>