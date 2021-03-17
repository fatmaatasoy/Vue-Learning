<template>
  <div>
    <div class="home">
      <input type="text" v-model="text" />
      <p>Yazılan Kelime:{{ text | toUpperCase }}</p>
      <p>Alfabetik sıraya göre:{{ text | sort }}</p>
    </div>
    <div v-for="pro in couse" :key="pro">
      <p>{{ pro }}</p>
    </div>
    <input type="text" placeholder="Arancak Kişinin ID'sını giriniz" v-model="persontext">
    <div v-for="user in searc" :key="user.id">
<p>{{user.id}}->{{user.name}} / {{user.city}}</p>
    </div>
  </div>
</template>
<script>
 import {testMixins} from '@/mixin/mixin.js'
export default {
   mixins: [testMixins],
  data() {
    return {
      text: "",
      persontext:"",
      product: ["Dün", "Yarın", "Olacak", "Kaç"],
      person: [
        { id: "1", name: "Ali", city: "Amasya" },
        { id: "2", name: "Güladiye", city: "İstanbul" },
        { id: "3", name: "Yavuz", city: "Hakkari" },
      ],
    };
  },
   
  computed: {
    couse() {
      const regepx = new RegExp(this.text, "i"); // regexp yapmazsak birebir aynısını aratacak bununla büyük küçük harf duyalılığını kapattık
      return this.product.filter((element) => {
        return element.match(regepx);
      });
    },
    searc(){
      return this.person.filter(element=>{
        return element.id.match(this.persontext)
         
      })
    }
  },
};
</script>
