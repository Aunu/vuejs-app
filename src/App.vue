<template>
 <div> 
  <div v-if="isLoading">Loading...</div>

  <div v-else-if="!isLoading">
    <nav>
      <ul>
        <li class="brand"><img src="./assets/logo.png" alt="Spotify"> Spotify</li>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
    <div class="container">
      <div class="songList">
            <h1>Best of NCS - No Copyright Sounds</h1>
            <div class="songItemContainer">
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="1" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="2" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="3" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="4" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="5" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="6" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="7" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="8" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="9" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
            </div>
        </div>
        <div class="songBanner"></div>

    </div>
    <div class="bottom">
      <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100">
      <div class="icons">
            <!-- fontawesome icons -->
            <i class="fas fa-3x fa-step-backward" id="previous"></i>
            <i class="far fa-3x fa-play-circle" id="masterPlay"></i>
            <i class="fas fa-3x fa-step-forward" id="next"></i> 
        </div>
        <div class="songInfo">
            <img src="./assets/playing.gif" width="42px" alt="" id="gif"> 
            <span id="masterSongName">Warriyo - Mortals [NCS Release]</span>
        </div>
    </div>
  </div>
  

  <div v-else>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @custom-event="handleCustomEvent"/>
  </div>
</div> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data() {
    return {
      isLoading: true
    }
  },
  components: {
    HelloWorld
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
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');


*{
    margin: 0;
    padding: 0;
}
nav{
    font-family: 'Ubuntu', sans-serif;
}
nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  background-color: black;
  color: white;
  height: 65px;
}

nav ul li{
    padding: 0 12px;
    cursor: pointer;
}

.brand {
  display: flex;
  align-items: center;
  font-weight: bolder;
}

.brand img{
    width: 44px;
    padding: 0 8px;
}
.bottom {
  position: sticky;
  bottom: 0;
  right:0;
  left:0;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
  flex-direction: column;
}
.container {
   min-height: 72vh; 
}
#myProgressBar {
  width: 80vw;
  cursor: pointer;
}
.songInfo {
  position: absolute;
  left: 10vw;
}

.songInfo img {
  opacity: 1;
  transition: opacity 0.4s ease-in;
}

.container{
   min-height: 72vh;
   background-color: black;
   color: white;
   font-family: 'Varela Round', sans-serif;
   display: flex;
   margin: 23px auto;
   width: 70%;
   border-radius: 12px;
   padding: 34px;
   background-image: url('./assets/bg.jpg');
}


.icons{
    margin-top: 10px; 
}
.icons i{
    cursor: pointer;
}
.songItemContainer{
    margin-top: 74px;
}

.songItem{
    height: 50px;
    display: flex;
    background-color: white;
    
    color: black;
    margin: 12px 0;
    justify-content: space-between;
    align-items: center;
    border-radius: 34px;
}

.songItem img{
    width: 43px;
    margin: 0 23px;
    border-radius: 34px;
}

.timestamp{
    margin: 0 23px;
}

.timestamp i{
    cursor: pointer;
}

</style>
