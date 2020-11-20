<template>
  <div ref="table"></div>
</template>

<script>
// made By Ahmed Yasser All Right Reserved
import swal from "sweetalert";
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
      required: false,
      type: Array,
    },
  },
  mounted() {
    if (this.data.length == 0) {
      const span = document.createElement("span");
      span.textContent = "No Records Found";
      this.$refs.table.appendChild(span);
    } else {
      this.drawTable();
    }
  },
  methods: {
    getColumnNames() {
      const [first] = this.data;
      this.columns = Object.keys(first);
    },
    drawTable() {
      // get column Names
      this.getColumnNames();
      // create table
      const table = document.createElement("table");
      // add classes and ID  to the table
      table.className =
        "table table-light table-striped table-responsive table-bordered col-lg-12";

      table.setAttribute("id", "CustomTable");

      // create thead

      const thead = document.createElement("thead");

      // create tr for thead

      const theadRow = document.createElement("tr");

      // append tr inside thead

      thead.appendChild(theadRow);

      // append thead inside table

      table.appendChild(thead);

      // get columns

      this.columns.forEach((column) => {
        const th = document.createElement("th");
        th.textContent = column;
        theadRow.appendChild(th);
      });

      // create tbody

      const tbody = document.createElement("tbody");

      // add tbody inside table

      table.appendChild(tbody);

      this.data.forEach((value) => {
        // create tr of tbody
        const tbodyTr = document.createElement("tr");
        const [code] = Object.keys(value);
        this.keys.push(value[code]);
        this.columns.forEach((col) => {
          // create td inside tr
          const td = document.createElement("td");
          // add values inside td
          td.textContent = value[col];
          // append td to tr
          tbodyTr.appendChild(td);
        });
        // append tr inside tbody
        tbody.appendChild(tbodyTr);
      });

      // check for actions
      if (this.actions.length > 0) {
        // create th inside for actions
        const action = document.createElement("th");
        action.textContent = "Actions";
        theadRow.appendChild(action);
        // get table rows
        table.querySelectorAll("tbody tr").forEach((row, index) => {
          // create new td
          const actionTd = document.createElement("td");
          // add display flex to td
          actionTd.style.display = "flex";
          // loop over actions
          this.actions.forEach((actionItem) => {
            // check for action props
            // eslint-disable-next-line no-prototype-builtins
            if (!actionItem.hasOwnProperty("tag")) {
              swal({
                title: "tag is missing",
                icon: "error",
              });

              console.error("tag is missing");
              this.$refs.table.remove();
            } else {
              this.checkForProps(actionItem);
            }

            if (actionItem.tag == "form" || actionItem.tag == "a") {
              // create element

              const element = document.createElement(actionItem.tag);
              // set attributes for <a> tag
              if (actionItem.tag == "a") {
                element.setAttribute(
                  "href",
                  `${actionItem.url}/${this.keys[index]}`
                );

                element.className = `btn ${actionItem.btn} text-capitalize`;

                element.innerHTML = actionItem.text ? actionItem.text : "";

                // create icon
                if (actionItem.icon) {
                  const icon = document.createElement("i");
                  icon.className = `fa ${actionItem.icon}`;
                  // eslint-disable-next-line no-prototype-builtins
                  if (actionItem.hasOwnProperty("text")) {
                    icon.style.marginRight = "3px";
                  }
                  element.prepend(icon);
                }
              } else {
                // set attributes for <form> tag

                element.style.display = "inline-block";

                element.setAttribute(
                  "action",
                  `${actionItem.url}/${this.keys[index]}`
                );

                element.setAttribute("method", "POST");

                // create csrf token
                const input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute(
                  "value",
                  document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content")
                );
                input.setAttribute("name", "_token");
                element.prepend(input);

                // create btn
                const btn = document.createElement("button");
                btn.setAttribute("type", "submit");
                btn.className = `btn ${actionItem.btn}`;
                btn.textContent = actionItem.text ? actionItem.text : "";

                // check if it has the alert option
                // eslint-disable-next-line no-prototype-builtins
                if (actionItem.hasOwnProperty("alert")) {
                  btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.title = "";
                    this.changeTitle(actionItem.alert);
                    this.sendForm(e);
                  });
                }
                // create icon for btn
                if (actionItem.icon) {
                  const icon = document.createElement("i");
                  icon.className = `fa ${actionItem.icon}`;
                  icon.style.pointerEvents = "none";
                  // eslint-disable-next-line no-prototype-builtins
                  if (actionItem.hasOwnProperty("text")) {
                    icon.style.marginRight = "3px";
                  }
                  btn.prepend(icon);
                }
                element.appendChild(btn);
              }
              actionTd.appendChild(element);
            }
          });
          // append new td inside tr
          row.appendChild(actionTd);
        });
      }
      // show dynamically generated table
      this.$refs.table.appendChild(table);
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
    checkForProps(prop) {
      if (prop.tag != "a" && prop.tag != "form") {
        swal({
          title: "<a> and <form> tags are the only supported",
          icon: "error",
        });

        console.error("<a> and <form> tags are the only supported");

        this.status = "error";
        // eslint-disable-next-line no-prototype-builtins
      } else if (!prop.hasOwnProperty("tag")) {
        swal({
          title: "Tag is missing",
          icon: "error",
        });

        console.error("tag is missing");

        this.status = "error";
        // eslint-disable-next-line no-prototype-builtins
      } else if (!prop.hasOwnProperty("btn")) {
        swal({
          title: "BTN is missing",
          icon: "error",
        });

        console.error("btn is missing");
        this.status = "error";
        // eslint-disable-next-line no-prototype-builtins
      } else if (!prop.hasOwnProperty("text") && !prop.hasOwnProperty("icon")) {
        swal({
          title: "icon or text is missing",
          icon: "error",
        });

        console.error("icon or text is missing");

        this.status = "error";
        // eslint-disable-next-line no-prototype-builtins
      } else if (!prop.hasOwnProperty("url")) {
        swal({
          title: "URL option is missing",
          icon: "error",
        });
        console.error("URL option is missing");

        this.status = "error";
        // eslint-disable-next-line no-prototype-builtins
      } else if (prop.tag == "a" && prop.hasOwnProperty("alert")) {
        console.error("alert option can be set with the <form> tag only");
        swal({
          title: "alert option can be set with the <form> tag only",
          icon: "error",
        });

        this.status = "error";
      } else {
        this.status = "";
      }

      if (this.status) {
        this.$refs.table.remove();
      }
    },
  },
};
</script>

<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
</style>
