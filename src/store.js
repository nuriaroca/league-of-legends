import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: null,
    search: "",
    role: "all",
    loading: false,
    champs: {},
    items: {},
    champ: {},
    user: {},
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
    },
    LOADER: (state, payload) => {
      state.loading = payload
    },
    SET_CHAMPS: (state, data) => {
      state.champs = data
    },
    SET_ITEMS: (state, data) => {
      state.items = data
    },
    SET_UNIQUECHAMPION: (state, data) => {
      state.champ = data
    },
    SET_USER: (state, data) => {
      state.user = data
    }
  },
  //context = store
  actions: {
    getCurrentVersion(context) {
      context.commit("LOADER", true)
      const url = "https://ddragon.leagueoflegends.com/api/versions.json";
      axios.get(url).then(response => {
        context.commit("SET_VERSION", response.data[0])
        context.commit("LOADER", false)
      })
    },
    getAllChamps(context) {
      context.commit("LOADER", true)
      const url = `https://ddragon.leagueoflegends.com/cdn/${context.getters.getVersion}/data/en_US/champion.json`;
      axios.get(url).then(response => {
        context.commit("SET_CHAMPS", response.data.data)
        context.commit("LOADER", false)
      })
    },
    getAllItems(context) {
      context.commit("LOADER", true)
      const url = `https://ddragon.leagueoflegends.com/cdn/9.8.1/data/en_US/item.json`;
      axios.get(url).then(response => {
        context.commit("SET_ITEMS", response.data.data)
        context.commit("LOADER", false)
      })
    },
    getUniqueChampion(context, championName) {
      context.commit("LOADER", true)
      const url = `https://ddragon.leagueoflegends.com/cdn/${context.getters.getVersion}/data/en_US/champion/${championName}.json`;
      axios.get(url).then(response => {
        context.commit("SET_UNIQUECHAMPION", response.data.data[championName]);
        context.commit("LOADER", false)
      })
    }
  },
  getters: {
    getVersion: state => state.version,
    getSearch: state => state.search,
    getRole: state => state.role,
    getLoading: state => state.loading,
    getChamps: state => state.champs,
    getItems: state => state.items,
    getChamp: state => state.champ,
    getUser: state => state.user
  }
})