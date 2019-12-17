import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

document.addEventListener('deviceready', function () {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
  window.navigator.splashscreen.hide()
}, false)
