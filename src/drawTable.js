const drawTable = (vm, options, classes) => {
  console.log(vm);
  // get column Names
  vm.getColumnNames();
  // create table
  const table = document.createElement("table");
  // add classes and ID to the table
  table.className = `table table-light table-striped table-responsive-sm table-responsive-md table-bordered table-hover `;

  if (classes) {
    table.className += classes;
  }

  table.setAttribute("id", "vuetyTable");

  // create thead

  const thead = document.createElement("thead");

  thead.classList.add("thead-light");

  // create tr for thead

  const theadRow = document.createElement("tr");

  // append tr inside thead

  thead.appendChild(theadRow);

  // append thead inside table

  table.appendChild(thead);

  // get columns

  vm.$data.columns.forEach((column) => {
    const th = document.createElement("th");
    if (Object.prototype.hasOwnProperty.call(options, "columns")) {
      if (Object.prototype.hasOwnProperty.call(options.columns, "thead")) {
        const thElement = th.classList;
        switch (options.columns.thead.align) {
          case "center":
            thElement.add("text-center");
            break;
          case "right":
            thElement.add("text-right");
            break;
          case "left":
            thElement.add("text-left");
            break;
          default:
            break;
        }
        if (
          Object.prototype.hasOwnProperty.call(options.columns.thead, "styles")
        ) {
          for (let property in options.columns.thead.styles) {
            th.style.setProperty(
              property,
              options.columns.thead.styles[property]
            );
          }
        }
      }
    }
    th.textContent = column;
    theadRow.appendChild(th);
  });

  // create tbody

  const tbody = document.createElement("tbody");

  // add tbody inside table

  table.appendChild(tbody);

  vm.$props.data.forEach((value) => {
    // create tr of tbody
    const tbodyTr = document.createElement("tr");
    if (Object.prototype.hasOwnProperty.call(options, "urlColumnCode")) {
      const objectKeys = Object.keys(value);
      let key = objectKeys.find(
        (arrayValue) => arrayValue == options.urlColumnCode
      );
      vm.$data.keys.push(value[key]);
    } else {
      const [code] = Object.keys(value);
      vm.$data.keys.push(value[code]);
    }
    vm.$data.columns.forEach((col) => {
      // create td inside tr
      const td = document.createElement("td");
      if (Object.prototype.hasOwnProperty.call(options, "columns")) {
        if (Object.prototype.hasOwnProperty.call(options.columns, "tbody")) {
          const tdElement = td.classList;
          switch (options.columns.tbody.align) {
            case "center":
              tdElement.add("text-center");
              break;
            case "right":
              tdElement.add("text-right");
              break;
            case "left":
              tdElement.add("text-left");
              break;
            default:
              break;
          }
          if (
            Object.prototype.hasOwnProperty.call(
              options.columns.tbody,
              "styles"
            )
          ) {
            for (let property in options.columns.tbody.styles) {
              td.style.setProperty(
                property,
                options.columns.tbody.styles[property]
              );
            }
          }
        }
      }

      // add values inside td
      if (Object.prototype.hasOwnProperty.call(options, "image")) {
        if (col == options.image.column) {
          if (
            Object.prototype.hasOwnProperty.call(options.image, "width") &&
            Object.prototype.hasOwnProperty.call(options.image, "height")
          ) {
            if (
              Object.prototype.hasOwnProperty.call(options.image, "lightbox")
            ) {
              // create a tag
              const link = document.createElement("a");
              const randomNumber = Math.random();
              link.setAttribute("data-lightbox", `image_${randomNumber}`);
              link.setAttribute("href", value[col]);
              // create img element
              const img = document.createElement("img");
              img.classList.add("img-fluid");
              img.style.width = options.image.width + "px";
              img.style.height = options.image.height + "px";
              img.src = value[col];
              link.appendChild(img);
              td.appendChild(link);
            } else {
              // create img element
              const img = document.createElement("img");
              img.classList.add("img-fluid");
              img.style.width = options.image.width + "px";
              img.style.height = options.image.height + "px";
              img.src = value[col];
              td.appendChild(img);
            }
          } else {
            vm.$refs.table.remove();
            console.error("VuetyTable: image dimensions are missing");
          }
        } else {
          td.innerHTML = value[col];
        }
      } else {
        td.innerHTML = value[col];
      }
      // append td to tr
      tbodyTr.appendChild(td);
    });
    // append tr inside tbody
    tbody.appendChild(tbodyTr);
  });

  // check for actions
  if (vm.$props.actions.length > 0) {
    // create th inside for actions
    const action = document.createElement("th");
    if (Object.prototype.hasOwnProperty.call(options, "columns")) {
      if (Object.prototype.hasOwnProperty.call(options.columns, "thead")) {
        const thElement = action.classList;
        switch (options.columns.thead.align) {
          case "center":
            thElement.add("text-center");
            break;
          case "right":
            thElement.add("text-right");
            break;
          case "left":
            thElement.add("text-left");
            break;
          default:
            break;
        }
        if (
          Object.prototype.hasOwnProperty.call(options.columns.thead, "styles")
        ) {
          for (let property in options.columns.thead.styles) {
            action.style.setProperty(
              property,
              options.columns.thead.styles[property]
            );
          }
        }
      }
    }

    action.textContent = Object.prototype.hasOwnProperty.call(
      options,
      "actionsColumnName"
    )
      ? options.actionsColumnName
      : "Actions";
    theadRow.appendChild(action);
    // get table rows
    table.querySelectorAll("tbody tr").forEach((row, index) => {
      // create new td
      const actionTd = document.createElement("td");
      if (Object.prototype.hasOwnProperty.call(options, "columns")) {
        if (Object.prototype.hasOwnProperty.call(options.columns, "tbody")) {
          const actionTdElement = actionTd.classList;
          switch (options.columns.tbody.align) {
            case "center":
              actionTdElement.add("text-center");
              break;
            case "right":
              actionTdElement.add("text-right");
              break;
            case "left":
              actionTdElement.add("text-left");
              break;
            default:
              break;
          }
          if (
            Object.prototype.hasOwnProperty.call(
              options.columns.tbody,
              "styles"
            )
          ) {
            for (let property in options.columns.tbody.styles) {
              actionTd.style.setProperty(
                property,
                options.columns.tbody.styles[property]
              );
            }
          }
        }
      }

      // add display flex to td
      // actionTd.style.display = "flex";
      // loop over actions
      vm.$props.actions.forEach((actionItem) => {
        // check for action props
        if (actionItem.tag === "form" || actionItem.tag === "a") {
          // create element
          const element = document.createElement(actionItem.tag);
          // set attributes for <a> tag
          if (actionItem.tag === "a") {
            // eslint-disable-next-line no-prototype-builtins
            if (!actionItem.hasOwnProperty("modal")) {
              element.setAttribute(
                "href",
                `${actionItem.url}/${vm.$data.keys[index]}`
              );
            } else {
              element.setAttribute("href", `#`);
              element.setAttribute("data-toggle", "modal");
              element.setAttribute(
                "data-target",
                "#vuety-target-" + vm.$data.keys[index]
              );
            }

            element.className = `btn ${actionItem.btn} text-capitalize`;

            element.innerHTML = actionItem.text ? actionItem.text : "";

            if (actionItem.title) {
              element.setAttribute("title", actionItem.title);
            }

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
              `${actionItem.url}/${vm.$data.keys[index]}`
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

            if (actionItem.title) {
              btn.setAttribute("title", actionItem.title);
            }

            // check if it has the alert option
            // eslint-disable-next-line no-prototype-builtins
            if (actionItem.hasOwnProperty("alert")) {
              btn.addEventListener("click", (e) => {
                e.preventDefault();
                vm.$data.title = "";
                vm.changeTitle(actionItem.alert);
                vm.sendForm(e);
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
  vm.$refs.table.appendChild(table);
};

export default drawTable;
