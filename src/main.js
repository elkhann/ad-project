import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCvRndkjictXnbPgsYaLdc5ccDpuz08qCY',
      authDomain: 'itc-ads-khann.firebaseapp.com',
      databaseURL: 'https://itc-ads-khann.firebaseio.com',
      projectId: 'itc-ads-khann',
      storageBucket: 'itc-ads-khann.appspot.com',
      messagingSenderId: '933187999232'
    })
  }
})
