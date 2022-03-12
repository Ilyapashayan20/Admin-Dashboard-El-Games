<template>
  <div v-if="error" class=" text-red-700">Could not fetc the data</div>
  <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">
          
      </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
export default {
    name:'Blogs',
    setup(){
        const {error,documents} = getCollection('blogs')


        return{error,documents}

    }

}
</script>

<style>

</style>