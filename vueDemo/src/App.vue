<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ totalPrice }}<br/>
    <!--路由-->
    <router-link :to="{path: 'apple'}">to apple</router-link>
    <router-link :to="{path: 'banana'}">to banana</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    totalPrice () {
      return this.$store.getters.getTotal
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
