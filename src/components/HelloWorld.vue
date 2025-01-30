<template>
  <div class="hello">
    <h1> Welcome to my new app</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String

  },
  created() {
   // this.isLoading = false;
    setTimeout(() => {
      this.$emit('custom-event', 'Hello from Child!');
    }, 100);
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.hello {
  display: flex;
  position: relative;
  top: 50vh;
  justify-content: center; 
}

.hello h1 {
  text-decoration: solid;
}

</style>
