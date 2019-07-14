<template>
  <v-app>
    <Loader></Loader>
    <Toolbar></Toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    Toolbar,
    Loader
  },
  crated() {
    // Add a request interceptor
    axios.interceptors.request.use(
      config => {
        // Do something before request is sent
        this.$store.commit("LOADER", true);
        return config;
      }, //LOADER true si pilla request, sino false
      error => {
        // Do something with request error
        this.$store.commit("LOADER", false);
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(response => {
      // Do something with response data
      this.$store.commit("LOADER", false);
      return response;
    });
  }
};
</script>
