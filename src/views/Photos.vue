<template>
  <div class="allPhotos">
    <Photos v-bind:allPhotos="allPhotos" />
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
      allPhotos: []
    };
  },
  created() {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation')
      .then(res => (this.allPhotos = res.data.results));
  }
};
</script>
