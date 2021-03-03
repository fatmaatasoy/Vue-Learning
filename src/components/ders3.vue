<template>
  <div>
      <div class="form-group">
        <label for="">Ara</label>
        <input type="text" placeholder="Ara" v-model="text">
        <ul v-for="value in filtered" :key="value">
            <li>{{value}}</li>
        </ul>
      </div>
      <!--Şimdi burada normalde filtre i kullanarak listeyi şekillendirebiliriz ancak bu vue. js fazla maliyet getridiği için computedla filtere kullanmak daha iyi çünkü computed sadece değişiklik oldugunda render eder ve böylece sistem çok yorulmaz--->
  </div>
</template>

<script>
export default {
    data(){
        return{
            text:"",
            list:["monitör","fare","dolap","raf","kapı","defter","kitap"]
        }
    },
    computed:{
        filtered(){
           return this.list.filter((element)=>{
               return element.match(this.text)
            })
        }
    }

}
</script>

<style>
ul{
    display: inline;
}

</style>