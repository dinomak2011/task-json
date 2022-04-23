import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router/router'
import useVuelidate from '@vuelidate/core'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(useVuelidate)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
