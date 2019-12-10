<template>
  <div class="home">
    <Photos />
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from '@/components/Photos.vue';

export default {
  name: 'photos',
  components: {
    Photos
  }
};
</script>
