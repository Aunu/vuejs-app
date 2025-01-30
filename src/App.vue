<template>
<div id="app">
    <nav-comp></nav-comp>
    <router-view></router-view>
  </div>
</template>

<script>

import NavComp from './components/navComp.vue';
export default {
  name: 'App',
  data() {
    return {
      isLoading: true
    }
  },
  components: {
    NavComp
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
