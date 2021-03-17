<template>
  <div>
      <b-row>
          <b-col> 
              <b-button @click="open=!open">Form Projesi için Tıklayın</b-button>
              <b-container v-if="open">
                 
                  <Form />

              </b-container>
          </b-col>
      </b-row>
  </div>
</template>

<script>
import Form from './form'
export default {
name:"Allproject",
components:{
    Form,
},
data(){
    return{
        open:false,
        
    }
}

}
</script>

<style>

</style>