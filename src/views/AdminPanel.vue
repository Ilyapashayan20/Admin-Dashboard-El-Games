<template>
<div class=" overflow-hidden">
  <Navbar />

</div>

<router-view />
</template>


<script>

import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar},
  setup() {
    const router = useRouter()
    const { user } = getUser()
  
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Home' })
      }
    })
  }
}
</script>

<style>
</style>