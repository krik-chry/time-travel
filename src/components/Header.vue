<template>
  <header class="header">
    <router-link to="/">
      <h1>A Journey Through Time</h1>
    </router-link>
    <div id="nav">
      <router-link class="home-link" to="/">Home </router-link>
      <router-link class="top-10-link" to="/popular">Top 10 </router-link>
      <router-link class="all-link" to="/photos">All Photos </router-link>
      <router-link class="buildings-link" to="/buildings">Buildings </router-link>
      <router-link class="nature-link" to="/nature">Nature </router-link>
      <router-link class="people-link" to="/people">People </router-link>
      <router-link class="aerialviews-link" to="/aerial-views">Aerial Views </router-link>
      <router-link class="interior-link" to="/interior">Interior </router-link>

      <router-link class="search-link" to="/search">
        <img src="http://simpleicon.com/wp-content/uploads/active-search.png" alt="search-icon" />
        Search
      </router-link>
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
  width: 60%;
  margin: 0 auto;
  padding-bottom: 10px;
  border-bottom: 5px solid rgba(37, 35, 35, 0.7);
  font-size: 35px;
  color: rgb(14, 39, 103);
}
#nav {
  margin-top: 20px;
  display: flex;
}
.header a {
  font-weight: bold;
  font-size: 22px !important;
  color: rgb(14, 39, 103);
  text-decoration: none;
}
img {
  width: 20px;
}
.home-link {
  margin-right: 15.3%;
  margin-left: 1%;
}
.all-link,
.top-10-link,
.nature-link,
.buildings-link,
.people-link {
  margin-right: 5%;
}
.search-link {
  margin-right: 15%;
}
</style>
