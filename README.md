<h1 align="center">
    Vuety Table
</h1>

This Vue Component can draw a table dynamically.

<p>
    <a href="https://www.npmjs.com/package/vuetytable"><img src="https://img.shields.io/npm/dt/vuetytable.svg" alt="Total Downloads"></a>
    <a href="https://github.com/Ahmed-Y98/vuetytable"><img src="https://img.shields.io/npm/v/vuetytable.svg" alt="Latest Release"></a>
    <a href="https://github.com/Ahmed-Y98/vuetytable/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vuetytable.svg" alt="License"></a>
</p>

## Prepare The Environment

```bash
    $ npm install
```

## Dependencies

- Bootstrap 4
- Fontawesome 4
- VueJs

## Usage

```js
import vuetytable from "vuetytable";

new Vue({
  components: {
    vuetytable,
  },
  data() {
    return {
      data: [{ id: 1, name: "lorem" }],
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
    };
  },
}).$mount("app_root_element");
```

import the component css file

```js
import "vuetytable/dist/vuetytable.css";
```

```html
<vuetytable
  :data="data"
  :actions="actions"
  :classes="`my-custom-css-class`"
  :options="{
    image: {
        column: 'picture',
        width: 50,
        height: 50,
        lightbox: true
        },
    columns: {
        thead: {
        align: 'center',
        styles: {
            'text-transform': 'capitalize',
            'font-weight': 'bold',
            'font-style': 'italic',
            }
        },
        tbody: {
        align: 'center',
        styles: {
            'text-transform': 'capitalize',
            'font-weight': 'bold',
            'font-style': 'italic',
            }
        },
      },
      urlColumnCode: 'id',
  }"
/>
```

- Data prop is the records that you want to display in the table.
- Actions key have different options:
  - The Required Are
    - tag should be `<a>` or `<form>`
    - btn is your preferred bootstrap class for buttons
    - url
  - The optional Are
    - icon is your preferred icon from the fontawesome library
    - text that will be displayed on the action
    - alert for authorization before submitting the form

###### NEW:

- The Library Supports Vue 3
- Added Lightbox Plugin
- With The `Classes` Prop Now You Can Add Your Preffered Css Classes

- With the options prop you can customize the table even more.
- if you want to display an image in the table you can now do that by passing the image object which contains the following keys:
- `column` is the column name of the picture.
- `height` of the picture.
- `width` of the picture.
- `lightbox` key if you want to use lightbox plugin
- `columns` which contains customizable options for the table head and the table body.
- `urlColumnCode` if you want to change the code in the url.

**Note:**

- alert option works with `<form>` tag only
- icon or text options at least one of them should appear.

<h4 align="center">
    Thanks And Happy Coding
</h4>
