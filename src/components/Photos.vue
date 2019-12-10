<template>
  <div class="compare-container">
    <VueCompareImage
      handleSize="50"
      sliderPositionPercentage="1"
      rightImage="https://before-after-media.s3.amazonaws.com/compilations/aligned/ff2e2bc5-a56c-4efc-99d3-5938884cb255.jpg"
      leftImage="https://before-after-media.s3.amazonaws.com/compilations/aligned/76465392-4c9b-4194-b585-8866887c0045.JPG"
    />
    <div class="now-then">
      <div class="then">THEN</div>
      <div class="now">NOW</div>
    </div>
    <div class="time-rail">TIME</div>
    <div class="back-to-time">
      <div class="arrow-box">
        <img class="arrow-img" src="../assets/arrow.png" alt="" />
      </div>
      <h1>
        Back to time !
      </h1>
    </div>
  </div>
</template>

<script>
import VueCompareImage from 'vue-compare-image';

export default {
  name: 'Image',
  components: { VueCompareImage }
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b98f42;
}
.compare-container {
  width: 60%;
  margin: 0 auto;
}
.vci-slider {
  margin: 30% 0;
  transform: rotate(90deg) !important;
}
.vci-container {
  overflow: visible !important;
}
.handle[data-v-1e5eda20] {
  transform: rotate(90deg);
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
}
.then {
  float: left;
}
.now {
  float: right;
}
.time-rail {
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: transparent;
}
.back-to-time {
  margin-top: 15px;
  float: right;
  position: absolute;
  right: 180px;
}
.arrow-box {
  padding-right: 15%;
}
.arrow-img {
  width: 160px;
  height: 90px;
  transform: rotate(200deg);
}
</style>
