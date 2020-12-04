<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <vue-table
          :data="records"
          :actions="actions"
          v-if="status"
          :options="{
            image: {
              column: 'picture',
              width: 50,
              height: 50,
            },
            columns: {
              thead: {
                align: 'center',
                styles: {
                  'text-transform': 'capitalize',
                  'font-weight': 'bold',
                  'font-style': 'italic',
                },
              },
              tbody: {
                align: 'center',
                styles: {
                  'text-transform': 'capitalize',
                  'font-weight': 'bold',
                  'font-style': 'italic',
                },
              },
            },
            urlColumnCode: 'id',
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
          picture:
            "https://images.unsplash.com/photo-1606942790567-5783bab8d944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
        },
        {
          id: 2,
          name: "test",
          picture:
            "https://images.unsplash.com/photo-1606942790567-5783bab8d944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
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
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.status = true;
        this.records = json;
      });
  },
};
</script>

<style scoped></style>
