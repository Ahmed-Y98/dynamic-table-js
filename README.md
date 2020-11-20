<h1 align="center">
    vuety Table
</h1>

This Vue Component can draw a table dynamically.

###### THERE IS NO MORE FOREACH headache.

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
}).$mount("app_root_element");
```
```js
import "vuetytable/dist/vuetytable.css";
```
Inside your blade view

```html
<custom-table
  :data="{{ json_encode($data)  }}"
  :actions="{{ json_encode($actions) }}"
/>
```

Inside Your Controller

- \$data will have the records fetched from the database
- If you want the actions to appear in the table pass the actions key
- Actions key have different options:
  - The Required Are
    - tag should be <a> or <form>
    - btn is your preferred bootstrap class for buttons
    - url
  - The optional Are
    - icon is your preferred icon from the fontawesome library
    - text that will be displayed on the action
    - alert for authorization before submiting the form

**Note:**

- alert option works with <form> tag only
- icon or text options at least one of them should appear.

```php
  public function table()
    {


        return view('basicdata::table', [
            'data' => $data,
            'actions' => [
                [
                    "tag" => 'form',
                    "btn" => 'btn-dark',
                    "icon" => "fa-edit",
                    'url' => '/yourRoute',
                    'text' => 'update',
                    'alert' => str_replace(' ', '_', 'Are You Sure You Want to Update This Record ?'),
                ],
            ],
        ]);
    }
```

<h4 align="center">
    Thanks And Happy Coding
</h4>
