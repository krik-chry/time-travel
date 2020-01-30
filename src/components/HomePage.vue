<template>
  <div class="main-info">
    <h1 class="intro">Time transforms everything.</h1>
    <p>
      As the years go by, <b class="emphasized">people</b>,
      <b class="emphasized">natural landscapes</b>, <b class="emphasized">cities</b> and all aspects
      of
      <b class="emphasized">human civilization</b>
      are changing.
    </p>
    <p>
      The photos are <b class="emphasized">time imprints</b> and the idea for this app is to make
      use of <b class="emphasized">photo collections</b> that will connect the user easily and
      quickly to the <b class="emphasized">recent past</b>.
    </p>
    <p>
      This can help us learn <b class="emphasized">history</b>, understand
      <b class="emphasized">evolution</b>, appreciate what we have gained with
      <b class="emphasized">progress</b>, and even reflect on what we have
      <b class="emphasized">lost</b>....
    </p>
    <h1>
      Welcome, to<br />
      <p class="title-app">A Journey Through Time</p>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.intro {
  font-size: 35px;
  color: black;
}
.main-info {
  margin: 3% 25%;
  padding: 2% 0;
  background: #682f0050;
  border-radius: 20%;
}
.emphasized {
  font-size: 110%;
  color: black;
}
h1 {
  margin-top: 2%;
}
img {
  width: 20%;
  border-radius: 50%;
}
p {
  font-size: 26px;
  margin: 3% 10%;
}
.title-app {
  font-size: 150%;
  color: #682f00;
  margin-top: 20px;
}
</style>
