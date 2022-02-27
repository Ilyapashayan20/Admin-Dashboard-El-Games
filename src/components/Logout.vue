<template>

  <div v-if="user">
    <button  class=" bg-red-600 transition hover:bg-red-700 text-white font-normal px-2 pb-1 rounded" @click="handleClick">Logout</button>
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