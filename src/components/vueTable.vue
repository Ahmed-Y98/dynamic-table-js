<template>
  <div ref="table" class="col-lg-12"></div>
</template>

<script lang="ts">
// made By Ahmed Yasser All Right Reserved
import swal from "sweetalert";
import checkProps from "../checkProps";
import drawTable from "../drawTable";
// eslint-disable-next-line no-unused-vars
import optionsType from "../types/optionsType";
// eslint-disable-next-line no-unused-vars
import actionType from "../types/actionType";
// eslint-disable-next-line no-unused-vars
import columnType from "../types/columnType";
// eslint-disable-next-line no-unused-vars
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "vueTable",
  data() {
    return {
      columns: [] as Array<Object>,
      keys: [] as Array<String | Number>,
      title: "" as string,
      status: "" as String,
    };
  },
  props: {
    data: { type: Array as PropType<any[]>, required: true },
    actions: { type: Array as PropType<actionType[]>, required: true },
    options: { type: Object as PropType<optionsType> },
    classes: { type: String, required: false },
  },
  mounted() {
    if (document.querySelectorAll(".custom-loader").length > 0) {
      document.querySelector(".custom-loader")?.remove();
    }
    Array.from(this.actions).forEach((action: actionType) => {
      checkProps(action, this);
    });

    if (this.data.length === 0) {
      const span = document.createElement("span");
      span.textContent = "No Records Found";
      (this.$refs.table as HTMLElement).appendChild(span);
    } else {
      drawTable(this, this.options, this.classes);
    }
  },
  methods: {
    getColumnNames() {
      // eslint-disable-next-line no-prototype-builtins
      if (this.options?.hasOwnProperty("excludeColumns")) {
        const [objectRow] = this.data;
        for (let key in objectRow) {
          if (this.options.excludeColumns.includes(key)) {
            delete objectRow[key];
          }
        }
        this.columns = Object.keys(objectRow);
      } else {
        const [object]: Array<Object> = this.data;
        this.columns = Object.keys(object);
      }
    },
    sendForm(e: Event) {
      e.stopPropagation();
      swal({
        title: this.title,
        icon: "info",
        buttons: ["Cancel", "Yes"],
      }).then((value) => {
        if (value) {
          console.log(e);
        }
      });
    },
    changeTitle(title: String) {
      return (this.title = title.split("_").join(" "));
    },
  },
});
</script>
