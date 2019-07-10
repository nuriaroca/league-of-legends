import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedChampion: null,
    version: null
  },
  mutations: {
    SET_VERSION: (state, data) => {
      state.version = data
    },

    TESTING: (state, payload) => {
      state.selectedChampion = payload
    }
  },
  actions: {

    getVersion(context) {
      const url = "https://ddragon.leagueoflegends.com/api/versions.json";
      axios.get(url).then(response => {
        context.commit("SET_VERSION", response.data[0])
      })
    }
  },

  getters: {
    getChampion: state => state.selectedChampion,

    // getChampion2(state) {
    //   return state.selectedChampion
    // }
  }
})