<template>
  <div>
    <h1>Search</h1>
    <h3>Search for a city, a country, a popular event or just a keyword...</h3>
    <form @submit="search">
      <input v-model="term" type="search" />
      <button @click="search">Search</button>
    </form>
    <Search
      v-bind:searchResults="searchResults"
      v-bind:searched="searched"
      v-bind:searching="searching"
    />
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import axios from 'axios';

export default {
  name: 'search',
  components: {
    Search
  },
  data() {
    return {
      term: '',
      searchResults: [],
      searching: false,
      searched: false
    };
  },
  methods: {
    search: function() {
      this.searching = true;
      this.searched = true;
      this.searchResults = [];
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?search=${this.term}`
        )
        .then(res => {
          setTimeout(() => {
            this.searching = false;
            this.searchResults = res.data.results;
            this.term = '';
          }, 1500);
        });
    }
  }
};
</script>

<style scoped>
input {
  outline: none;
  border-radius: 20px;
  background: rgba(37, 35, 35, 0.5);
  padding: 10px;
  font-size: 24px;
  color: white;
  margin-right: 30px;
  width: 40%;
}

button {
  outline: none;

  border-radius: 20px;
  background: rgba(37, 35, 35, 0.5);
  padding: 10px;
  font-size: 24px;
  color: white;
  width: 100px;
}
</style>
