<template>
  <v-app>
    <v-content>
      <Toolbar></Toolbar>
      <Loader v-if="getLoading"></Loader>
      <router-view v-show="getLoading == false"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Loader from "./components/Loader";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Toolbar,
    Loader
  },
  computed: {
    ...mapGetters(["getLoading"])
  }
};
</script>
