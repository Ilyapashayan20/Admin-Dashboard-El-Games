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
      router.push({name: 'Admin-Panel'})
    }

    return {enterAdmin}
  }

}
</script>

<style>

</style>