<template>


<img class="absolute z-0" src="../images/svg/Torus.svg" alt="">
<img class="absolute right-52 top-8" src="../images/svg/Ball.svg" alt="">
<img class="absolute bottom-10 left-72" src="../images/svg/Polyhedron.svg" alt="">
<img class="absolute bottom-32 right-0" src="../images/svg/Cube-2.svg" alt="">
  <div class="flex items-center justify-center min-h-screen bg-red-700">
       <div class="px-8 py-6 mt-4 text-left bg-blue-el-games shadow-lg rounded-lg">
            <img src="../images/logo/logo2.svg" alt="">
            <form @submit.prevent="handleSubmit" class="mt-4">
                 
                 <input type="email" class=" my-2  w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" placeholder="Email" required v-model="email" >

                 <input type="password" class=" my-2 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" placeholder="Password" required v-model="password" >

               <div class="error my-4 text-smn text-red-600  font-medium">{{ error }}</div>
               <button class="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg
                hover:bg-red-900">Log in</button>

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
@media (max-width:920px) {
  .absolute{
    display: none;
  }
  
}
@media (max-width:553px){
  .flex{
    padding: 0 40px;
  }

}


</style>