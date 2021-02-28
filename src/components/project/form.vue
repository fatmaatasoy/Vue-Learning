<template>
  <div>
    <label class="mt-5">User ID</label>
    <b-form-input
      :class="{
        'is-invalid': userId.length < 2,
        'is-valid': userId.length > 5,
      }"
      v-model="userId"
      id="feedback-user"
    ></b-form-input>
    <b-form-invalid-feedback>
      Your user ID must be 5-12 characters long.
    </b-form-invalid-feedback>
    <button class="btn btn-success" :disabled="userId.length<3" v-on:click="addNewatem">Ekle</button>
    <List :list="list" />
  </div>
</template>

<script>

import List from './list.vue';
export default {
  components: { List },
  data() {
    return {
      userId: "",
      list: [
        {
          name: "Ders Çaliş",
        },
      ],
    };
  },
  methods: {
    addNewatem() {
      if (this.userId.length>2) {
        this.list.push({
          name: this.userId,
        });
      }

      this.userId = "";
    },
  },
};
</script>

<style></style>