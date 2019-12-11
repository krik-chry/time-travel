<template>
  <div class="popular">
    <Popular v-bind:popularPhotos="popularPhotos" />
  </div>
</template>

<script>
import Popular from '@/components/Popular.vue';
import axios from 'axios';

export default {
  name: 'popular',
  components: {
    Popular
  },
  data() {
    return {
      popularPhotos: []
    };
  },
  created() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?ordering=-visitors'
      )
      .then(res => (this.popularPhotos = res.data.results));
  }
};
</script>
