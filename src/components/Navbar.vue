<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/profile">Profiles</router-link>
      </li>
      <li>
        <router-link to="/books">Books</router-link>
      </li>
    </ul>
    <ul class="next">
      <li>
        <button @click="goBack">goBack</button>
      </li>
      <li>
        <button @click="goHome">goHome</button>
      </li>
      <li>
        <button @click="goNext">goNext</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      
    };
  },
  methods:{
    goHome(){
      this.$router.push({ name: 'Home'})
    },
    goBack(){
      this.$router.go(-1)
    },
    goNext(){
      this.$router.go(1)
    }
  }
};
</script>

<style>
nav{
    background: #051996;
    color: #fff;
    margin: 0;
    padding: 1rem;
}
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
}
a {
  padding: 1rem;
  color: #fff;
  text-decoration: none;
}
li{
    padding: 1rem;
}
.next{
  display: flex;
  justify-content: center;

}
.next li{
  margin: 0 1rem;
}
</style>