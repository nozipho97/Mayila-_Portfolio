<template>
  <navbar/>
  <router-view/>
  <footerVue/>
  
</template>

<script>
import navbar from './components/navbarVue.vue';
import footerVue from './components/footerVue.vue';
export default{
  name:'App',
  components:{
    navbar, footerVue
  }
}
</script>

<style>
#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0%;
  margin:0%;
  z-index: 0;
  background-color:#860A89;
  /* height: 100vh; */

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  justify-items: end;
}

nav a.router-link-exact-active {
  color: #DE27E1;
}
</style>
