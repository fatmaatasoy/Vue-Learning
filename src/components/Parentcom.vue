<template>
  <div>
    <b-row>
      <b-col>
        <b-button @click="open = !open">1 Nolu Deneme için Tıklayın</b-button>
        <div class="container" v-show="open">
          <Proje1 />
        </div>
      </b-col>
      <b-col>
        <b-button @click="open2 = !open2"
          >2 Nolu Deneme için Tıklayın
        </b-button>
        <Proje2
          :selam="selam"
          :items="items"
          :messages="messages"
          v-if="open2"
        />
        <div class="form-group">
          <label for=""></label>
          <input
            type="text"
            class="form-control"
            placeholder="Yerim parent"
            v-model.lazy="messages"
          />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button  class="mt-5" @click="open3=!open3">3.Ders için basın</b-button>
        <Ders3 v-if="open3"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Proje1 from "./ders1";
import Proje2 from "./ders2";
import Ders3 from  "./ders3"
export default {
  name: "Parent",
  components: {
    Proje1,
    Proje2,
    Ders3,
  },
  data() {
    return {
      selam: "Ben geldim",
      items: [
        {
          id: 1,
          name: "Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal",
        },
        {
          id: 2,
          name: "Echo Plus (2nd Gen) Bundle with Philips Hue Bulb - Sandstone",
        },
        { id: 3, name: "Sonos One (Gen 2) - with Amazon Alexa (Black)" },
      ],
      messages: "",
      open: false,
      open2: false,
      open3:false,
    };
  },
};
</script>

<style>
</style>