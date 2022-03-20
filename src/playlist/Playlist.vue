<template>
  <CreteBlog v-if="showModal"  @close="toggleModal"  />
 
    <div class="scroll w-114 min-w-full max-h-96 rounded overflow-y-scroll bg-white py-5 px-3 flex flex-col">
        <div class="flex justify-between items-center"><h1  class=" text-sm font-medium ">Creat Post</h1> <i class="material-icons bg-grey-bg rounded p-1  cursor-pointer text-black"  @click="toggleModal">add</i> </div>



        <div class=" max-w-full mt-4" v-for="blog in documents" :key="blog.id" >
          <router-link :to="{ name: 'BlogsDetails' ,  params:{ id:blog.id}}" >
          <div class=" flex justify-between items-center  cursor-pointer hover:scale-150 transition-all hover:shadow bg-grey-bg p-3 rounded" >
            <img class=" w-10 max-h-8 rounded" :src="blog.imgUrl">
            <h1 class=" ml-3 text-sm font-medium">{{ blog.title }}</h1>
          </div>
          
          </router-link>
        </div>

    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import CreteBlog from '../playlist/CreateBlog.vue'

export default {
  
    components: {CreteBlog},
    
    data(){
  return{
    showModal: false
  }
},
methods:{
  toggleModal(){
    this.showModal =!this.showModal
  },
},
  setup(){
        const {error,documents} = getCollection('blogs')
        return{error,documents,}

    }
}
</script>

<style>

</style>