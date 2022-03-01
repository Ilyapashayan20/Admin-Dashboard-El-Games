<template>
  <form class="s rounded w-114 " @submit.prevent="onSubmit">
    
      <div class=" flex flex-col items-start  p-10 rounded">
            <div class="flex flex-col items-center mb-8">
          
          <input class=" border-b font-normal border-solid border-blue-el-games focus:outline-none focus:border-red-700 " v-model="form.name" type="text" required placeholder="name"/>
      </div>
          <textarea class="block w-96 h-36   font-normal text-black bg-white bg-clip-padding
          border-b border-solid border-blue-el-games  transition ease-in-out m-0 focus:border-red-700 focus:outline-none  "
           required v-model="form.text" placeholder="About Text"></textarea>
            <button class="mt-6 border p-1 hover:border-red-700 border-blue-el-games rounded ">
          Create About
      </button>
      </div>
     
  </form>
</template>

<script>
import { createAbout } from "../firebase/config"
import { reactive } from 'vue'
export default {
    setup(){
        const form = reactive({name: '', text: ''})

        const onSubmit = async () =>{
            await createAbout({...form})
            form.name = ''
            form.text = ''
        }

        return {form,onSubmit}
    }

}
</script>

<style>
.s{
    -webkit-box-shadow: 0px 0px 42px 1px #131C2E; 
box-shadow: 0px 0px 42px 1px #131C2E;
}

</style>