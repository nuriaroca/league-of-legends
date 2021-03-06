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

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBtLg_WMEfKdlB3g-2GRFdToWAkb94H4oI",
  authDomain: "lol-chat-88682.firebaseapp.com",
  databaseURL: "https://lol-chat-88682.firebaseio.com",
  projectId: "lol-chat-88682",
  storageBucket: "",
  messagingSenderId: "544191041433",
  appId: "1:544191041433:web:866a1cc0826fa176"
});

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    ...mapActions(["getCurrentVersion"])
  },
  created() {
    this.getCurrentVersion()
  },
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("SET_USER", user)
  } else {
    store.commit("SET_USER", null)
  }
})