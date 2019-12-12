<template>
  <div class="buildings">
    <h1 class="page-title">Buildings</h1>
    <div class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
    <Buildings v-bind:buildings="buildings" v-bind:fetching="fetching" />
  </div>
</template>

<script>
import Buildings from '@/components/Buildings.vue';
import axios from 'axios';

export default {
  name: 'buildings',
  components: {
    Buildings
  },
  data() {
    return {
      buildings: [],
      pageNumber: 1,
      fetching: false
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber < 87) {
        this.buildings = [];
        this.pageNumber += 1;
        this.getAll();
      }
    },
    previousPage() {
      if (this.pageNumber > 1) {
        this.buildings = [];
        this.pageNumber -= 1;
        this.getAll();
      }
    },
    getAll() {
      this.fetching = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=1&page=${this.pageNumber}`
        )
        .then(res => {
          this.fetching = false;
          this.buildings = res.data.results;
        });
    }
  },
  created() {
    this.getAll();
  }
};
</script>
