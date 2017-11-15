<template>
  <div class="hello">
    <h1>{{ reserve }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I\'m a RedApple'
    }
  },
  computed: {
    reserve:function(){
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    getParams () {
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
