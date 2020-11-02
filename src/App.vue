<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld/> -->
    <!-- <Landing/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Landing from './components/Landing.vue'
// import header from './components/header.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Landing,
    // header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
