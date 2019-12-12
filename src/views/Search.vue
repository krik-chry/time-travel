<template>
  <div>
    <form class="search-form">
      <input v-model="term" type="search" />
      <button class="search-button" @click="search">Search</button>
    </form>
    <div v-if="this.totalPages !== 0" class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
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
      searched: false,
      pageNumber: 1,
      totalPages: 0
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber < this.totalPages) {
        this.searchResults = [];
        this.pageNumber += 1;
        this.search();
      }
    },
    previousPage() {
      if (this.pageNumber > 1) {
        this.searchResults = [];
        this.pageNumber -= 1;
        this.search();
      }
    },
    search: function() {
      this.searching = true;
      this.searched = true;
      this.searchResults = [];
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?page=${this.pageNumber}&search=${this.term}`
        )
        .then(res => {
          setTimeout(() => {
            this.totalPages = Math.ceil(res.data.count / 20);
            this.searching = false;
            this.searchResults = res.data.results;
          }, 1500);
        });
    }
  }
};
</script>

<style scoped>
.search-form {
  padding: 0 20px;
  margin: 15px 35% 15px 33%;
  width: 34%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
input {
  padding: 5px;
  padding-left: 10px;
  outline: none;
  background: rgba(37, 35, 35, 0.5);
  font-size: 24px;
  color: white;
  margin: 15px 0 15px 15px;
  width: 70%;
  border-radius: 20px;
  height: 40px;
}

.search-button {
  margin: 15px;
  padding: 5px;
  outline: none;
  border-radius: 20px;
  background: rgba(37, 35, 35, 0.5);
  font-size: 24px;
  color: white;
  width: 30%;
  height: 40px;
}
</style>
