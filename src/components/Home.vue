<template>
  <div class="hello">
    <h1>Home</h1>
<img src="../assets/home.png" class="homeimage" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.homeimage{
  width: 100%;
  /* height: 100vh; */
  object-fit: cover;
}
</style>
