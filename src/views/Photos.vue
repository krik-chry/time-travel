<template>
  <div class="allPhotos">
    <h1 class="page-title">Photos List</h1>
    <div class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
    <Photos v-bind:allPhotos="allPhotos" v-bind:fetching="fetching" />
  </div>
</template>

<script>
import Photos from '@/components/Photos.vue';
import axios from 'axios';

export default {
  name: 'photos',
  components: {
    Photos
  },
  data() {
    return {
      allPhotos: [],
      pageNumber: 1,
      fetching: false
    };
  },
  methods: {
    nextPage() {
      this.allPhotos = [];
      if (this.pageNumber < 105) {
        this.pageNumber += 1;
        this.getAll();
      }
    },
    previousPage() {
      this.allPhotos = [];
      if (this.pageNumber > 1) {
        this.pageNumber -= 1;
        this.getAll();
      }
    },
    getAll() {
      this.fetching = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?page=${this.pageNumber}`
        )
        .then(res => {
          this.fetching = false;
          this.allPhotos = res.data.results;
        });
    }
  },
  created() {
    this.getAll();
  }
};
</script>

<style>
.page-title {
  margin: 15px 30% 15px 30%;
  background: rgb(14, 39, 103);
  color: white;
  border-radius: 20px;
}
.page-nav {
  padding: 0 20px;
  border: 2px solid rgb(10, 39, 78);
  border-radius: 20px;
  background: lightgray;
  margin: 0 35% 0 35%;
  width: 30%;
  display: flex;
}
.page-num {
  width: 25%;
  margin: 15px 0;
}
.nav-button {
  width: 30%;
  outline: none;
  border-radius: 20px;
  background: rgba(37, 35, 35, 0.5);
  font-size: 18px;
  color: white;
  width: 200px;
  height: 30px;
  margin: 10px;
}
</style>
