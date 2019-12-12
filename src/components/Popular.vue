<template>
  <div>
    <h1 class="page-title">Most Popular Photos</h1>
    <p class="fetching-message" v-if="popularPhotos.length === 0">Getting photos...Wait a moment</p>

    <hooper
      class="hooper-container"
      :vertical="true"
      style="height: 900px"
      :itemsToShow="1"
      :centerMode="true"
      :mouseDrag="false"
    >
      <slide v-bind:key="photo.id" v-for="photo in popularPhotos.slice(0, 10)">
        <div class="compare-container">
          <div>
            <div v-if="photo === popularPhotos[0]" class="time-arrow">
              <img class="arrow-img" src="../assets/arrow.png" alt="arrow" />
              <h2 class="back-year">Time travel HERE!</h2>
            </div>
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
  name: 'Popular',
  props: ['popularPhotos'],
  components: {
    VueCompareImage,
    Hooper,
    Slide
  }
};
</script>
