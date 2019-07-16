import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  mapActions
} from 'vuex';
import firebase from 'firebase';
// import firestore from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBtLg_WMEfKdlB3g-2GRFdToWAkb94H4oI",
  authDomain: "lol-chat-88682.firebaseapp.com",
  databaseURL: "https://lol-chat-88682.firebaseio.com",
  projectId: "lol-chat-88682",
  storageBucket: "",
  messagingSenderId: "544191041433",
  appId: "1:544191041433:web:866a1cc0826fa176"
};

firebase.initializeApp(config)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    ...mapActions(["getCurrentVersion"])
  },
  // SHA DE CRIDAR!!!!!
  created() {
    this.getCurrentVersion()
  },
}).$mount('#app')