<template>
  <div class="people">
    <h1 class="page-title">People</h1>
    <div class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
    <People v-bind:people="people" v-bind:fetching="fetching" />
  </div>
</template>

<script>
import People from '@/components/People.vue';
import axios from 'axios';

export default {
  name: 'people',
  components: {
    People
  },
  data() {
    return {
      people: [],
      pageNumber: 1,
      fetching: false
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber < 3) {
        this.people = [];
        this.pageNumber += 1;
        this.getAll();
      }
    },
    previousPage() {
      if (this.pageNumber > 1) {
        this.people = [];
        this.pageNumber -= 1;
        this.getAll();
      }
    },
    getAll() {
      this.fetching = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=4&page=${this.pageNumber}`
        )
        .then(res => {
          this.fetching = false;
          this.people = res.data.results;
        });
    }
  },
  created() {
    this.getAll();
  }
};
</script>
