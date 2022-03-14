<template>

<CreateGame />


<GamesList class="scroll pb-24 max-h-screen overflow-y-auto" />


</template>

<script>

import CreateGame from '../tools/CreateGame.vue'
import GamesList from '../playlist/GamesList.vue'


export default {

components:{CreateGame,GamesList},
  
 

}
</script>

<style>

</style>