<template>
  <div id="app">
    <div>
      <div><Proje1 /></div>
     
    </div>
  </div>
</template>

<script>

import Proje1 from "../src/components/proje1";

export default {
  name: "App",
  components: {
   
    Proje1,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
