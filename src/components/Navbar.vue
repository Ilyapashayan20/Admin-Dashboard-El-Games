<template>
<div class=" overflow-hidden">
  <nav v-if="user">

     
   
    <button @click="handleClick">Logout</button>
  </nav>

      <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        
        
      </aside>

</div>

 
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()
    const handleClick = async () => {
      await logout()
    }
    return { handleClick, user }
  }
}
</script>

<style>

</style>