<template>
    <div class="backdrop">
        <div class="modal" >
         <form class="s h-96 rounded mx-auto relative   py-5 px-7  flex flex-col bg-white" @submit.prevent="handleSubmit">
             <i class="material-icons absolute right-0 top-0  cursor-pointer text-black"   @click="CloseModal">close</i>
      <h4 class=" mb-3 text-base font-medium">Create a New Post</h4>
      <input class=" border-b font-normal border-solid border-blue-el-games focus:outline-none focus:border-red-700 pb-2" type="text" required placeholder="Blog title" v-model="title">
      <textarea class="block  h-28 my-5   font-normal text-black bg-white bg-clip-padding
          border-b border-solid border-blue-el-games  transition ease-in-out m-0 focus:border-red-700 focus:outline-none" required placeholder="Blog description..." v-model="description"></textarea>
      
      <label>Upload Blog Image</label>
      <input class="my-2 py-4" type="file" @change="handleChange">
      <div class="error mt-2 text-red-600">{{fileError}}</div>

      <button class="mt-6 border p-1 hover:border-red-700 border-blue-el-games rounded" v-if="!isPending" >Create</button>
      
      <button class="mt-6 border p-1 hover:border-red-700 border-blue-el-games rounded" v-else disabled >Saving...</button>
      
    </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import { timestamp } from '@/firebase/config'

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage()
    const { error, addDoc } = useCollection('blogs')
    const router = useRouter()


    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const isPending = ref(false)
    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true
        await uploadImage(file.value)
        const res = await addDoc({
          title: title.value,
          description: description.value,
          
          imgUrl: url.value,
          filePath: filePath.value, 
          blogtype: [],
          createdAt: timestamp()
        })
        isPending.value = false
        if (!error.value) {
          router.push({ name: 'BlogsDetails' ,  params:{ id: res.id}})
        }
      }
    }
    // allowed file types
    const types = ['image/png', 'image/jpeg']
    const handleChange = (e) => {
      let selected = e.target.files[0]
      console.log(selected)
      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please select an image file (png or jpg)'
      }
    }
    
    return { title, description, handleSubmit, fileError, handleChange, isPending }
  },
      methods:{
  CloseModal(){
    this.$emit('close')
  }
}
}
</script>
<style>
.modal{
    width: 550px;
    padding: 20px;
    margin: 150px auto;
    background: white;
    border-radius:10px ;

}
.backdrop{
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.actions{
    text-align: center;
   margin: 30px 0px 10px 0px;
   
}
.actions a{
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
</style>