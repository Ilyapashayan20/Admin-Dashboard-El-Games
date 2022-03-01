<template>
<div>
 
  <SectionTop />
  <div class="flex">
    <Menu />
    <BlockWindow />
  </div>

</div>


</template>


<script>

import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Menu from '../components/Menu.vue'
import SectionTop from '../components/SectionTop.vue'
import BlockWindow from "../views/BlockWindow.vue"
export default {
  components: { Menu,SectionTop,BlockWindow},
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
body{
  overflow: hidden;
}
</style>