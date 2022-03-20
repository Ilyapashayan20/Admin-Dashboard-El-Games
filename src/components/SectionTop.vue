<template>
       <div class=" w-full bg-blue-el-games py-6 px-6 flex items-center justify-between">
         <a href="/dashboard"><img class=" cursor-pointer" src="../images/logo/logo2.svg" alt=""></a>
           <div class="search-block flex justify-between w-80 items-center ">
                   <input type="text" class=" w-fullblock px-3py-1.5 text-sm font-normal text-blue-el-games p-1 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none" id="exampleFormControlInput3" placeholder="Search" />
                   <div class="Logout">
                       <Logout />
                   </div>
           </div>
       </div>

     
       

</template>

<script>
import Logout from '../components/Logout.vue'

export default {
    components: {Logout}

}
</script>

<style>

</style>