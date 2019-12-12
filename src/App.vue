<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'app',
  components: {
    Header
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(51, 28, 12);
}

body {
  background-image: url(https://images.freecreatives.com/wp-content/uploads/2015/03/6809725-simple-vintage-backgrounds.jpg);
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* overflow: hidden; */
}
</style>
