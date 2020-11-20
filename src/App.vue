<template>
<div id="app">
  <vue-table />
</div>
</template>

<script>
import vueTable from "./components/vueTable";

export default {
  name: "App",
  components: {
    'vue-table': vueTable
  }
}
</script>

<style scoped>

</style>