<template>
  <div class="about">
    <div class="about-info">
      <p>This app was created during the 4-Days-Long Codaisseur Academy Week 10 Hackathon</p>
      <p>
        The subject of the competition was:
      </p>
      <p><u>"Build a Travel App with a Technology not taught by Codaisseur Academy"</u></p>
      <p>The new web programming technology i worked with was <u>Vue.js Framework</u></p>
      <p>
        Making a functional, useful app in 4 days with a new tool was HARD....but it was totally
        worth it!
      </p>
      <p>
        Special thanks to all the teachers of the Codaisseur Academy and
        <a :href="`https://www.re.photos`">re.photos</a> website. They did an amazing job and I am
        thankful.
      </p>
    </div>

    <p class="copyright">
      All photos in this app belong to re.photos.com website and their respective creators.
      Copyright © 2019 Amsterdam, NL. All rights reserved.
    </p>
  </div>
</template>

<style scoped>
.about-info {
  margin: 3% 30%;
  padding: 2%;
  border: 20px solid;
  border-radius: 20%;
}
p {
  font-size: 25px;
}
.copyright {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10px;
}
</style>
