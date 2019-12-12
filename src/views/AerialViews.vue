<template>
  <div class="aerial-views">
    <h1 class="page-title">Aerial Views</h1>
    <div class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
    <AerialViews v-bind:aerialViews="aerialViews" v-bind:fetching="fetching" />
  </div>
</template>

<script>
import AerialViews from '@/components/AerialViews.vue';
import axios from 'axios';

export default {
  name: 'aerialViews',
  components: {
    AerialViews
  },
  data() {
    return {
      aerialViews: [],
      pageNumber: 1,
      fetching: false
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber < 8) {
        this.aerialViews = [];
        this.pageNumber += 1;
        this.getAll();
      }
    },
    previousPage() {
      if (this.pageNumber > 1) {
        this.aerialViews = [];
        this.pageNumber -= 1;
        this.getAll();
      }
    },
    getAll() {
      this.fetching = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=5&page=${this.pageNumber}`
        )
        .then(res => {
          this.fetching = false;
          this.aerialViews = res.data.results;
        });
    }
  },
  created() {
    this.getAll();
  }
};
</script>
