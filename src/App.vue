<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <vue-table
        class="ahmed"
          :data="records"
          :actions="actions"
          :options="{
           urlColumnCode: 'id'
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vueTable from "./components/vueTable";

export default {
  name: "App",
  components: {
    "vue-table": vueTable,
  },
  data() {
    return {
      records: [
        {
          id: 1,
          name: "test",
        },
        {
          id: 2,
          name: "test",
        },
      ],
      actions: [
        {
          tag: "a",
          btn: "btn-dark",
          text: "update",
          url: "/test",
        },
      ],
      status: false,
    };
  },
  beforeCreate() {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.status = true;
    //     this.records = json;
    //   });
  },
};
</script>

<style scoped></style>
