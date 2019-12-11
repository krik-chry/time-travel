<template>
  <div class="nature">
    <Nature v-bind:nature="nature" />
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
      nature: []
    };
  },
  created() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=3&country=&earlier_than=&later_than=&ordering=-rating_sort_criterion&position_in=&tag=&timespan='
      )
      .then(res => (this.nature = res.data.results));
  }
};
</script>
