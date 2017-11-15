<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
    <router-view></router-view>
    <keep-alive>
      <Tab></Tab>
    </keep-alive>
  </div>
</template>

<script>
import Tab from './Tab'
export default {
  components:{
    Tab
  },
  data () {
    return {
      msg: 'I\'m a Apple',
      price: 5
    }
  },
  methods: {
    getParams () {
      console.log(this.$route.params);
    },
    addOne () {
      this.$store.dispatch('increase', this.price)
      //commit读取store中的mutation
    },
    minusOne () {
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
