<template>
<div >
  <Login  @login='enterAdmin' />
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'


export default {
  components: {Login},
  
   setup() {
    const router = useRouter()
    const { user } = getUser()

    if(user){
      router.push({name:'Dashboard'})
    }else{
      router.push({name: 'Home'})
    }

    const enterAdmin = () => {
      router.push({name: 'Dashboard'})
    }
    


    return {enterAdmin,}
  }

}
</script>

<style>

body{
  background-color:#e3e3e4;
}



</style>