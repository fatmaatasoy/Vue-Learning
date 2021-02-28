<template>
  <div>
    <p @click="change2()">{{ soru }}</p>
    <!--click event ine bir method yani fonksiyon atadik yazıya bastiğimizda değişiyor-->
    <button @click="eventHandler($event)">Event</button>
    <button v-on:click="change = !change">Tikla</button>
    <!-- Burada on:clickla change in değerini değiştirdik--->
    <p v-if="change">Lorem ipsum dolor sit amet.</p>
    <!-- v-if yani eger anlamında eger change true olursa yazı gözokecektir der-->
    <div>
      <p v-bind:style="{ background }">
        Burada arkaplan rengini bind ile değiştiricez
      </p>
      <p :class="{ 'a':change }">Class ekletelim</p>
      <!--Bind elementin attrubituna buton yardımıyla müdahale ediyor-->
    </div>
    <div>
      <input
        type="text"
        v-model.lazy="text"
        placeholder="Birşeyler yaz"
      /><!--v-model değerin value sunu alır .lazy ise direk işlemek yerine yazıp bir yere tıklayınca yazıyı işler-->
      <p>{{ text }}</p>
      <input type="checkbox" value="Ali" v-model="checkbox" />
      <label for="Ali">Ali</label>
      <input type="checkbox" value="Veli" v-model="checkbox" />
      <label for="Veli">Veli</label>
      <p>{{ checkbox }}</p>
    </div>
    <div>
      <table>
        <tr v-for="(value, name) in lists" :key="value" :id="name">
          <td>{{ name }}:{{ value }}</td>
        </tr>
      </table>
    </div>

    <input type="text" placeholder="Yazın" v-model="newTodoText" />
    <button @click="addNewTodo">Ekle</button>

    <ul v-for="(to, index) in Todo" :key="to.id" :title="to.name">
      <li style="list-style: none">
        {{ to.id }}:{{ to.name }}
        <button @click="Todo.splice(index, 1)">Kaldır</button>
      </li>
    </ul>
   
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      change: true,
      background: "red",
      soru: "Sende Bir değişiklik var",
      text: "",
      checkbox: [],
      lists: {
        ıd: "1",
        name: "Fatma",
        surname: "Atasoy",
      },
      newTodoText: "",

      Todo: [
        {
          id: 1,
          name: "Ev temizlencek",
        },
      ],
      newTodoId: 2,
    };
  },
  methods: {
    change2() {
      this.soru = "Bu aralar çok değiştim";
    },
    eventHandler($event) {
      console.log($event);
    },
    addNewTodo() {
      this.Todo.push({
        id: this.newTodoId++,
        name: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
};
</script>

<style>
.a {
  background-color: aqua;
}
</style>