<template>
  <div class="people">
    <People v-bind:people="people" />
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
      people: []
    };
  },
  created() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://www.re.photos/api/compilation/?category=4&country=&earlier_than=&later_than=&ordering=-rating_sort_criterion&position_in=&tag=&timespan='
      )
      .then(res => (this.people = res.data.results));
  }
};
</script>
