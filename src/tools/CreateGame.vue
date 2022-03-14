<template>
 <div class="block p-6 rounded-lg shadow-lg bg-white w-">
     <h1 class=" text-base font-medium" >Create New Games</h1>
  <form class="mt-5"  @submit.prevent="handleSubmit">
    <div class="form-group mb-6">
      <input type="text" class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" 
        placeholder="Name"  v-model="title" required>
    </div>
    <div class="form-group mb-6">
      <textarea
      class="  form-control  block  w-full  px-3  py-1.5 text-sm  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none "
      rows="5"
      placeholder="Description" v-model="description" required></textarea>
    </div>
    <div class="form-group mb-6">
         <input type="text" class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" 
        placeholder="Game link Google Store" v-model="linkOne" required>
         <input type="text" class=" mt-6 form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" 
        placeholder="Game link App Store" v-model="linkTwo" required>
        
    </div>
    <div  class="form-group mb-6">

        <input class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"  type="file" @change="handleChange" required>
    </div><div class="error mt-2 mb-6 text-red-600">{{fileError}}</div>
    <button v-if="!isPending"  class=" w-full px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded  shadow-md  hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150  ease-in-out">Create
    </button>
    <button v-else disabled  class=" w-full px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded  shadow-md  hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150  ease-in-out">Saving...
    </button>
  </form>
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
    const { error, addDoc } = useCollection('games')
 
    const title = ref('')
    const description = ref('')
    const linkOne = ref('')
    const linkTwo = ref('')
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
          linkOne:linkOne.value,
          linkTwo:linkTwo.value,  
          imgUrl: url.value,
          filePath: filePath.value, 
          createdAt: timestamp()
        })
        isPending.value = false
      }
    }
    // allowed file types
    const types = ['image/png']
    const handleChange = (e) => {
      let selected = e.target.files[0]
      console.log(selected)
      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please select an image file (png)'
      }
    }
    
    return { title, description, handleSubmit, fileError, handleChange, isPending,linkOne,linkTwo }
  }

}
</script>

<style>

</style>