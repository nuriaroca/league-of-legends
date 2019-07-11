import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  mapActions
} from 'vuex';

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    ...mapActions(["getVersion"])
  },
  created() {
    this.getVersion()
  },
}).$mount('#app')