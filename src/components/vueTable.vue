<template>
  <div ref="table" class="col-lg-12"></div>
</template>

<script>
// made By Ahmed Yasser All Right Reserved
import swal from "sweetalert";
import checkProps from "../checkProps";
import drawTable from "../drawTable";
export default {
  name: "vueTable",
  data() {
    return {
      columns: [],
      keys: [],
      title: "",
      status: "",
    };
  },
  props: {
    data: {
      required: true,
      type: Array,
    },
    actions: {
      required: true,
      type: Array,
    },
    options: {
      required: false,
      type: Object,
      default() {
        return {};
      },
    },
    classes: {
      required: false,
      type: String,
    },
  },
  mounted() {
    Array.from(this.actions).forEach((action) => {
      checkProps(action, this);
    });
    if (this.data.length === 0) {
      const span = document.createElement("span");
      span.textContent = "No Records Found";
      this.$refs.table.appendChild(span);
    } else {
      drawTable(this, this.options, this.classes);
    }
  },
  methods: {
    getColumnNames() {
      // eslint-disable-next-line no-prototype-builtins
      if (this.options.hasOwnProperty("excludeColumns")) {
        const [object] = this.data;
        for (let key in object) {
          if (this.options.excludeColumns.includes(key)) {
            delete object[key];
          }
        }
        this.columns = Object.keys(object);
      } else {
        const [object] = this.data;
        this.columns = Object.keys(object);
      }
    },
    sendForm(e) {
      e.stopPropagation();
      swal({
        title: this.title,
        icon: "info",
        buttons: ["Cancel", "Yes"],
      }).then((value) => {
        if (value) {
          e.target.parentElement.submit();
        }
      });
    },
    changeTitle(title) {
      return (this.title = title.split("_").join(" "));
    },
  },
};
</script>
