<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Parentcom/>
  </div>
</template>

<script>
// @ is an alias to /src
import Parentcom from '@/components/Parentcom.vue'

export default {
  name: 'Home',
  components: {
    Parentcom
  }
}
</script>
