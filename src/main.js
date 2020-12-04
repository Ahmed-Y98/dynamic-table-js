import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.min";
new Vue({
  render: h => h(App),
}).$mount('#app')
