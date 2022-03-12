<template>
 <progress :value="UploadValue" max="100 "></progress>
 <input type="file" @change="onFileSelected" />
 <button @click="onUpload">Upload</button>
 <img :src="this.picture" alt="">
</template>

<script>
import { storage } from '../firebase/config'
export default {
  data(){
    return{
      selectedFile: null,
      images: [],
      currentNumber: 0,
      timer: null,
      UploadValue: 0,
      picture: null,
    }
  },
  methods:{
    onFileSelected(event){
      this.selectedFile=event.target.files[0]

    },

    onUpload(){
      const storageRef=storage.ref(`/imgaes/${this.selectedFile.name}`);
      const task =storageRef.put(this.selectedFile);
      task.on('state_changed',snapshot=>{
        let percentage  = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        this.UploadValue = percentage;

      }, error=>{console.log(error.message)},
      () =>{this.UploadValue = 100;
      task.snapshot.ref.getDownloadURL().then((url)=>{
        this.picture = url;
        console.log(this.picture)

      })
      })

    }
  }

}
</script>

<style>

</style>