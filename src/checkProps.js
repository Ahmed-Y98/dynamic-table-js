const checkForProps = (prop, vm) => {
  if (prop.tag !== "a" && prop.tag !== "form") {
    console.error("VuetyTable: <a> and <form> tags are the only supported");
    vm.$data.status = "error";
    // eslint-disable-next-line no-prototype-builtins
  } else if (!prop.hasOwnProperty("tag")) {
    console.error("tag is missing");
    vm.$data.status = "error";
    // eslint-disable-next-line no-prototype-builtins
  } else if (!prop.hasOwnProperty("btn")) {
    console.error("btn is missing");
    vm.$data.status = "error";
    // eslint-disable-next-line no-prototype-builtins
  } else if (!prop.hasOwnProperty("text") && !prop.hasOwnProperty("icon")) {
    console.error("icon or text is missing");
    vm.$data.status = "error";
    // eslint-disable-next-line no-prototype-builtins
  } else if (!prop.hasOwnProperty("modal")) {
    // eslint-disable-next-line no-prototype-builtins
    if (!prop.hasOwnProperty("url")) {
      console.error("URL option is missing");
      vm.$data.status = "error";
    }
    // eslint-disable-next-line no-prototype-builtins
  } else if (prop.tag === "a" && prop.hasOwnProperty("alert")) {
    console.error("alert option can be set with the <form> tag only");
    vm.$data.status = "error";
    // eslint-disable-next-line no-prototype-builtins
  } else if (prop.tag === "form" && prop.hasOwnProperty("modal")) {
    console.error("Modal option can be set with the <a> tag only");
    vm.$data.status = "error";
    // eslint-disable-next-line no-prototype-builtins
  } else if (prop.hasOwnProperty("url") && prop.hasOwnProperty("modal")) {
    console.error("Modal option cannot Have A Url Option");
    vm.$data.status = "error";
  } else {
    vm.$data.status = "";
  }

  if (vm.$data.status) {
    vm.$refs.table.remove();
  }
};

export default checkForProps;
