<template>
    <div> 
     <div v-if="isLoading">Loading...</div>
   
     <div v-else-if="!isLoading">
       <song-list></song-list>
       <div class="bottom">
         <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100">
         <div class="icons">
               <!-- fontawesome icons -->
               <i class="fas fa-3x fa-step-backward" id="previous"></i>
               <i class="far fa-3x fa-play-circle" id="masterPlay"></i>
               <i class="fas fa-3x fa-step-forward" id="next"></i> 
           </div>
           <div class="songInfo">
               <img src="../assets/playing.gif" width="42px" alt="" id="gif"> 
               <span id="masterSongName">Warriyo - Mortals [NCS Release]</span>
           </div>
       </div>
     </div>
     
   
     <div v-else>
       <img alt="Vue logo" src="../assets/logo.png">
       <HelloWorld msg="Welcome to Your Vue.js App" @custom-event="handleCustomEvent"/>
     </div>
   </div> 
   </template>
   
   <script>
   
   import HelloWorld from './HelloWorld.vue';

   import SongList from './SongList.vue';
   export default {
     name: 'SpotifyPage',
     data() {
       return {
         isLoading: true
       }
     },
     components: {
       HelloWorld,
       SongList
     },
       methods: {
       handleCustomEvent(data) {
         console.log('Testing events', data)
       }
     },
     created() {
       setTimeout(() => {
         console.log('Vue app is created by anurag SET time out');
         this.isLoading = false;
       }, 1000);
       
     }
   }
   </script>
   
   <style>
   
   
   </style>
   