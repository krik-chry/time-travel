<template>
  <div>
    <h1>Photos List</h1>
    <p class="fetching-message" v-if="allPhotos.length === 0">Fetching...</p>

    <hooper
      class="hooper-container"
      :vertical="true"
      style="height: 900px"
      :itemsToShow="1"
      :centerMode="true"
      :mouseDrag="false"
    >
      <slide v-bind:key="photo.id" v-for="photo in allPhotos">
        <div class="compare-container">
          <div>
            <div v-if="photo === allPhotos[0]" class="time-arrow">
              <img class="arrow-img" src="../assets/arrow.png" alt="arrow" />
              <h2 class="back-year">Time travel</h2>
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
            <h2>Location: {{ photo.location_text }}, {{ photo.country }}</h2>
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
  name: 'Photos',
  props: ['allPhotos'],
  components: {
    VueCompareImage,
    Hooper,
    Slide
  }
};
</script>

<style>
.fetching-message {
  font-size: 30px;
}

.back-year {
  width: 5%;
  margin: 0 50%;
}
.time-arrow {
  z-index: 100;
  position: absolute;
  top: 175%;
  right: 32%;
}
.hooper-container {
  margin-top: 30px;
  outline: none;
}
.photo-info {
  margin: 10% 0 0 -10%;
  width: 40%;
  padding: 2%;
}
.photo-info h1 {
  text-decoration: underline;
}
.left-image {
  border: 15px solid darkblue;
  border-radius: 20px;
  width: 85% !important;
  max-height: 700px !important;
}
.right-image {
  border-radius: 20px;
  border: 15px solid darkslategray;
  width: 85% !important;
  max-height: 700px !important;
}
.compare-container {
  width: 80%;
  margin: 0 5%;
  display: flex;
}
.vci-slider {
  cursor: default !important;
  transform: rotate(90deg) !important;
}
.vci-container {
  overflow: visible !important;
  margin: 0 auto !important;
}
.handle:active {
  opacity: 1;
}
.handle {
  cursor: ew-resize !important;
  transform: rotate(90deg);
  opacity: 0.6;
  border: 5px solid rgb(14, 39, 103) !important;
}
.left-arrow {
  border-color: rgba(0, 0, 0, 0) rgb(14, 39, 103) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) !important;
}
.right-arrow {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(14, 39, 103) !important;
}
.line {
  width: 0px !important;
}
.now-then {
  color: black;
  font-size: 18px;
  height: 20px;
  margin: 15px 5px;
  width: 85%;
}
.then {
  float: left;
  font-size: 22px;
}
.now {
  float: right;
  font-size: 22px;
}
.time-rail {
  font-size: 22px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  width: 85%;
}
.arrow-img {
  margin-bottom: 15px;
  width: 160px;
  height: 90px;
  transform: rotate(190deg);
}
</style>
<style scoped>
h1 {
  font-size: 35px;
}
</style>
