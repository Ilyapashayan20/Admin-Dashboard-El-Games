<template>
<div class=" ml-9">
    <h1 class=" text-red-700 mt-4 text-section font-semibold text-center">Cretae About Us</h1>
    
    <div class="mt-10 flex">
        <AboutCreate />
    </div>
   
</div>
 <div class="scroll pb-24 max-h-screen overflow-y-auto float-right ml-14 w-full">
     <h1 class=" mt-4 text-section font-semibold text-center text-red-700">All Abouts</h1>
         <AboutList />
    </div>


  
</template>

<script>
import AboutCreate from '../tools/AboutCreate.vue'
import AboutList from '../tools/AboutList.vue'
export default {
    components: {AboutCreate,AboutList}

}
</script>

<style>
body{
    width: 100%;
}

.scroll::-webkit-scrollbar {
  width: 2px;               /* width of the entire scrollbar */
}

.scroll::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);        /* color of the tracking area */
}

.scroll::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);    /* color of the scroll thumb */
      /* roundness of the scroll thumb */
 
}
</style>