<template>
    <nav>
      <ul>
        <li class="brand"><img src="../assets/logo.png" alt="Spotify"> Spotify</li>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/spotify">Songs</router-link></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavComp',

}
</script>

<style scoped>
a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: none;
}
</style>