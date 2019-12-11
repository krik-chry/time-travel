<template>
  <header class="header">
    <router-link to="/">
      <h1>A Journey Through Time</h1>
    </router-link>
    <div id="nav">
      <router-link class="buildings-link" to="/buildings">Buildings </router-link>
      <router-link class="nature-link" to="/nature">Nature </router-link>
      <router-link class="people-link" to="/people">People </router-link>
      <router-link class="top-10-link" to="/popular">Top 10 </router-link>
      <router-link class="home-link" to="/">Home </router-link>
      <router-link class="all-link" to="/photos">All Photos </router-link>
      <router-link class="search-link" to="/search">Search </router-link>
      <router-link class="about-link" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: white;
}
.header {
  border-radius: 20px;
  background: rgba(37, 35, 35, 0.507);
  text-align: center;
  color: white;
  padding: 10px;
  margin: 1% 10% 0 10%;
}

.header h1 {
  font-size: 35px;
  color: rgb(14, 39, 103);
  width: 100%;
  margin: 0 1% 0 1%;
}
#nav {
  display: flex;
}
.header a {
  font-weight: bold;
  margin-right: 80px;
  font-size: 22px !important;
  color: rgb(14, 39, 103);
  padding-right: 5px;
  text-decoration: none;
}
</style>
