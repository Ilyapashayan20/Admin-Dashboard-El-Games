<template>
<h1 class=" text-center">{{ abouts.length }}</h1>
<div class="p-8 flex flex-col">
    <div class=" p-5 rounded bg-blue-el-games mb-10" v-for="{id,name,text} in abouts" :key="id">
        <h1 class=" text-red-600 text-base font-medium mb-3"><span class=" text-white ml-1">-</span>{{ name }}<span class="text-white mr-1">-</span></h1>
        <p class="text-white">{{ text }}</p>
        <button @click="deleteAbout(id)" class=" mt-4 bg-red-600 text-white border rounded p-1">Delete</button>
    </div>
</div>
  
</template>

<script>
import { useLoadAbouts, deleteAbout } from '../firebase/config'
export default {
    setup(){
        const abouts = useLoadAbouts()

        return { abouts,deleteAbout }
    }

}
</script>

<style>




</style>