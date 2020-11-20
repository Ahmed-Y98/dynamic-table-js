import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.min";
import vueTable from "../dist/vue-table.umd.js";
Vue.component('vue-table' , vueTable);
new Vue({
  render: h => h(App),
}).$mount('#app')
