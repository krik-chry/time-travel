<template>
  <div>
    <h2 v-if="searching === true">
      Searching...Wait a moment
    </h2>
    <div
      class="no-results"
      v-if="searchResults.length === 0 && searched === true && searching === false"
    >
      <img src="https://www.diamondboomerang.com/images/no-result.png" alt="not-found" />
      <h1 class="try-again">PLEASE TRY AGAIN</h1>
    </div>
    <hooper
      class="hooper-container"
      :vertical="true"
      style="height: 900px"
      :itemsToShow="1"
      :centerMode="true"
      :mouseDrag="false"
    >
      <slide v-bind:key="photo.id" v-for="photo in searchResults">
        <div class="compare-container">
          <div>
            <VueCompareImage
              :handleSize="50"
              :sliderPositionPercentage="1"
              :rightImage="photo.image_before.aligned_file_fullscreen"
              :leftImage="photo.image_after.aligned_file_fullscreen"
            />
            <div class="now-then">
              <div class="then">{{ photo.image_before.creation_date }}</div>
              <div class="now">{{ photo.image_after.creation_date }}</div>
            </div>
            <div class="time-rail">Timespan: {{ photo.timespan }}</div>
          </div>

          <div class="photo-info">
            <h1>{{ photo.title }}</h1>
            <h2>{{ photo.location_text }}, {{ photo.country }}</h2>
          </div>
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import VueCompareImage from 'vue-compare-image';
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Search',
  components: {
    VueCompareImage,
    Hooper,
    Slide
  },
  props: ['searchResults', 'searching', 'searched', 'previousTerm']
};
</script>

<style scoped>
.try-again {
  font-size: 50px;
  letter-spacing: 2px;
  color: #565656;
}
.no-results {
  margin-top: 4%;
}
h1 {
  font-size: 35px;
}
</style>
