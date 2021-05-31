/* eslint-disable vue/valid-v-bind */
/* eslint-disable vue/no-parsing-error */
<template>
  <div id="app">
    <div class="container mt-5">
      <div class="row">
        <vue-table
          :data="data"
          :actions="actions"
          :options="{
            urlColumnCode: 'id',
            image: {
              column: 'picture',
              width: 80,
              height: 80,
              lightbox: true,
            },
            excludeColumns: ['id'],
          }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vueTable from "./components/vueTable.vue";

export default defineComponent({
  name: "App",
  components: {
    vueTable,
  },
  data() {
    return {
      actions: [
        {
          tag: "a",
          btn: "btn-dark",
          url: "example.com",
          text: "lorem",
          icon: "fa-edit",
          alert: "any message",
        },
      ],
      data: [{ id: 1, name: "lorem" }],
    };
  },
});
</script>
