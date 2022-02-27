<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
       <div class="px-8 py-6 mt-4 text-left bg-blue-el-games shadow-lg">
            <img src="../images/logo/logo2.svg" alt="">
            <form @submit.prevent="handleSubmit" class="mt-4">
                 
                 <input type="email" class=" my-2  w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" placeholder="Email" required v-model="email" >

                 <input type="password" class=" my-2 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" placeholder="Password" required v-model="password" >

               <div class="error my-4">{{ error }}</div>
               <button class="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg
                hover:bg-red-900 mt-4">Log in</button>

            </form>
       </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from "../composables/useLogin"
export default {

     setup(props,context) {
    const email = ref('')
    const password = ref('')

    const { error,login }=  useLogin()

    const handleSubmit = async () => {
      await login(email.value,password.value)
      if(!error.value){
        context.emit('login')
      }
    }

    return { email, password, handleSubmit , error}
  }


}
</script>

<style>

</style>