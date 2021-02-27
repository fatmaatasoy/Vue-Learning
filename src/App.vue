<template>
  <div id="app">
    <b-row>
      <b-col><Proje1 /></b-col>
      <b-col>
        <input type="text" v-model.lazy="messages" placeholder="Ben App.vue dayım">
        <Proje2 :selam="selam" :items="items" :messages="messages"/></b-col>
    </b-row>
  </div>
</template>

<script>
import Proje2 from "../src/components/proje2";
import Proje1 from "../src/components/proje1";

export default {
  name: "App",
  components: {
    Proje2,
    Proje1,
  },
  
  data() {
    return {
    selam:"Geldim",
    messages:"",
    items:[
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    };
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
