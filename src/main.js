import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import Fastclick from "fastclick";

Fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
