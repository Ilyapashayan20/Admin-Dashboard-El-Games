<template>


<div v-if="error">{{error}}</div>

<div v-if="document" class=" w-full ">
    <h1 class=" mt-10 text-center text-xl font-medium" >Blog</h1>

    <div class=" mt-3 flex flex-col items-center  ">
        <div class="img ">
              <img class=" rounded max-w-220px max-h-72" :src="document.imgUrl">
        </div>
        <div class="info text-center flex items-center flex-col w-96">
            <h1 class=" text-base mb-3">{{ document.title }}</h1>
            <p class=" text-gray-500">{{ document.description }}</p>

            <span>{{   }}</span>
            

        </div>
        <div class="tools mt-6 flex ">
            <button class="bg-red-500 p-2 rounded text-white text-sm" @click="handleDelet">Delete</button>

        </div>
      
    </div>



</div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import useDocument from "@/composables/useDocument";
import useStorage from "@/composables/useStorage";
import { useRouter } from 'vue-router'
export default {
    props:['id'],

    setup(props){
        const { error, document } = getDocument('blogs', props.id)

       


        const { deleteDoc } = useDocument('blogs',props.id)
           const { deleteImage } = useStorage()

        const router = useRouter()


        const handleDelet = async () =>{
             await deleteImage(document.value.filePath)
             await deleteDoc()
             router.push({ name: 'Blog' })
           }
        return{ error, document, deleteDoc,handleDelet,deleteImage ,}
    }

    

}
</script>

<style>

</style>