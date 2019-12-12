<template>
  <div class="interior">
    <h1 class="page-title">Interior</h1>
    <div class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
    <Interior v-bind:interior="interior" v-bind:fetching="fetching" />
  </div>
</template>

<script>
import Interior from '@/components/Interior.vue';
import axios from 'axios';

export default {
  name: 'interior',
  components: {
    Interior
  },
  data() {
    return {
      interior: [],
      pageNumber: 1,
      fetching: false
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber < 2) {
        this.interior = [];
        this.pageNumber += 1;
        this.getAll();
      }
    },
    previousPage() {
      if (this.pageNumber > 1) {
        this.interior = [];
        this.pageNumber -= 1;
        this.getAll();
      }
    },
    getAll() {
      this.fetching = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=2&page=${this.pageNumber}`
        )
        .then(res => {
          this.fetching = false;
          this.interior = res.data.results;
        });
    }
  },
  created() {
    this.getAll();
  }
};
</script>
