<template>
  <div class="nature">
    <h1 class="page-title">Nature</h1>
    <div class="page-nav">
      <h3 class="page-num" v-if="pageNumber">Page {{ pageNumber }}</h3>
      <button class="nav-button" @click="previousPage">Previous Page</button>
      <button class="nav-button" @click="nextPage">Next Page</button>
    </div>
    <Nature v-bind:nature="nature" v-bind:fetching="fetching" />
  </div>
</template>

<script>
import Nature from '@/components/Nature.vue';
import axios from 'axios';

export default {
  name: 'nature',
  components: {
    Nature
  },
  data() {
    return {
      nature: [],
      pageNumber: 1,
      fetching: false
    };
  },
  methods: {
    nextPage() {
      if (this.pageNumber < 7) {
        this.nature = [];
        this.pageNumber += 1;
        this.getAll();
      }
    },
    previousPage() {
      if (this.pageNumber > 1) {
        this.nature = [];
        this.pageNumber -= 1;
        this.getAll();
      }
    },
    getAll() {
      this.fetching = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=3&page=${this.pageNumber}`
        )
        .then(res => {
          this.fetching = false;
          this.nature = res.data.results;
        });
    }
  },
  created() {
    this.getAll();
  }
};
</script>
