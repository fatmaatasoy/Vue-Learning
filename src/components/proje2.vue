<template>
  <div>
    <p>{{ selam }}</p>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
    <p>{{messages}}</p>
  </div>
</template>

<script>
export default {
  name: "Proje2",
  props: ["selam","items","messages"],
};
</script>

<style>
</style>