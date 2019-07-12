import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedChampion: null,
    version: null,
    search: "",
    role: ""
  },
  mutations: {
    SET_VERSION: (state, data) => {
      state.version = data
    },
    SET_SEARCH: (state, data) => {
      console.log(data);

      state.search = data
    },
    SET_ROLE: (state, data) => {
      console.log(data);

      state.role = data
    }
  },
  //context = store
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
    getVersion: state => state.version,
    getSearch: state => state.search,
    getRole: state => state.role
    // getChampion2(state) {
    //   return state.selectedChampion
    // }
  }
})