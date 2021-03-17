<template>
<div>
<button @click="yazdir">Ekrana Mesaj Ver </button>
</div>
</template>
<script>
import {ekran} from '@/mixin/mixin.js'
  export default {
   mixins:[ekran]//birden fazla mixins import edilebilir.
   }
</script>