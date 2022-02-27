<template>
  <div class="nav  bg-blue-600 py-6 px-5 max-w-220px min-h-screen flex">
    <nav class="flex flex-col">
      
      <router-link to="/dashboard" active-class="active" class="flex items-center text-white text-sm py-2 px-3 mb-3"><i class="material-icons text-white mr-1">dashboard</i> Dashboard</router-link>
       <router-link to="/games" active-class="active" class="flex items-center text-white text-sm py-2 px-3 mb-3"><i class="material-icons text-white mr-1">games</i> Games</router-link>
        <router-link to="/blog" active-class="active" class="flex items-center text-white text-sm py-2 px-3 mb-3"><i class="material-icons text-white mr-1">feed</i> Blogs</router-link>
    </nav>
  
  </div>
</template>

<script>
export default {
  
 
 
}
</script>

<style>
.active{
  background: #ec1823;

border-radius: 4px;
 
}

</style>