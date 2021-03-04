<template>
  <div id="app">
    <div class="container mt-5">
      <div class="row">
        <vue-table
          class="ahmed"
          :data="records"
          :actions="actions"
          :options="{
            urlColumnCode: 'id',
            image: {
              column: 'picture',
              width: 80,
              height: 80,
              lightbox: true,
            },
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
            "https://images.unsplash.com/photo-1553634551-6d1e9f22afee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 2,
          name: "test",
          picture:
            "https://images.unsplash.com/photo-1553634551-6d1e9f22afee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
      actions: [
        {
          tag: "a",
          btn: "btn-dark mr-2",
          text: "update",
          url: "/test",
          title: "test",
        },
        {
          tag: "form",
          btn: "btn-dark",
          text: "update",
          url: "/test",
          title: "test",
          alert: "adds",
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
