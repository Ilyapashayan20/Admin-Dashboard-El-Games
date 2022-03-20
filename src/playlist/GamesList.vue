<template>

  <div class=" w-full p-6 flex  flex-col items-center bg-red-600 ">
    <h1 class=" text-center text-white text-base mb-12 font-semibold">All Games </h1>
      <div v-for="game in documents" :key="game.id" class=" mb-24">
           <div class="flex max-w-xl border-2 border-yellow-600 rounded-3xl bg-blue-el-games   p-6">
        <div class=" w-60">
          <h1 class=" text-white font-semibold text-lg">{{ game.title }}</h1>
          <p class=" h-36 text-white text-p max-w-slide font-light mt-4 mb-14">
         {{ game.description }}
          </p>
          <div class="flex justify-between  ">
              <a :href="game.linkOne" target="_blanck"><img src="../images/svg/gp.svg" alt="GooglePlay" class=" w-28 cursor-pointer"></a>
              <a :href="game.linkTwo" target="_blanck"><img src="../images/svg/as.svg" alt="AppStore" 
              class=" w-28 cursor-pointer "></a>
            
          </div>
        </div>
         <div class="iphone ml-5 relative -top-16  w-52  ">
           <div class=" w-52 h-full relative bg-iphone flex justify-center">
               <img class=" absolute  z-10" src="../images/games/iphone.svg" alt="">

                <div class="arrows w-20 flex items-center justify-around absolute -bottom-36   border-2 rounded-smm py-2 px-3 bg-yellow-500 z-20">
              <img class=" cursor-pointer" src="../images/games/arrow-right.svg" alt="">
               <img class=" mx-1" src="../images/games/line.svg" alt="">
              <img class=" cursor-pointer" src="../images/games/arrow-left.svg" alt="">


            </div>
           </div>
          
            <img class=" h-game-img w-52 absolute top-4 z-ziro" :src="game.imgUrl" alt="">
           
          </div>
      </div>
<!-- 
        <button class=" bg-red-600 px-2 py-1 text-center text-sm font-normal text-white border-2 rounded-lg mt-7 border-white">Delete Game</button> -->
      </div>

  </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
    setup(){
        const {error,documents} = getCollection('games')
        return{error,documents,}
    }
}
</script>

<style>

</style>