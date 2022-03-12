<template>
  <Login  @login='enterAdmin' />
</template>

<script>
import Login from '../components/Login.vue'
import { useRouter } from 'vue-router'

export default {
  components: {Login},
   setup() {
    const router = useRouter()

    const enterAdmin = () => {
      router.push({name: 'Dashboard'})
    }

    return {enterAdmin}
  }

}
</script>

<style>

body{
  background-color:#e3e3e4;
}



</style>