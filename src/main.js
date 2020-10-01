// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDHLeOfbQy6JWkvDH35kBGDPr8A3X150p8',
  authDomain: 'vue-firebase-auth-test-5631e.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-test-5631e.firebaseio.com',
  projectId: 'vue-firebase-auth-test-5631e',
  storageBucket: 'vue-firebase-auth-test-5631e.appspot.com',
  messagingSenderId: '927154312622',
  appId: '1:927154312622:web:063469099a73ba2ace243f',
  measurementId: 'G-MQF7T2D4LD'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
