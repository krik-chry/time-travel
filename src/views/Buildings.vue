<template>
  <div class="buildings">
    <Buildings v-bind:buildings="buildings" />
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
      buildings: []
    };
  },
  created() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=1&country=&earlier_than=&later_than=&ordering=-visitors&position_in=&tag=&timespan='
      )
      .then(res => (this.buildings = res.data.results));
  }
};
</script>
