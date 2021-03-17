<template>
  <div>
      <b-list-group class="mt-5" v-for="(item,index) in list" :key="item.name">
      <b-list-group-item variant="warning"
        >{{ item.name }}
        <button class="btn btn-danger" @click="list.splice(index,1)">kaldır</button></b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
    props:["list"]

}
</script>

<style>

</style>