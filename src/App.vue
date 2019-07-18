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
import Breadcrumbs from "./components/Breadcrumbs";

export default {
  name: "App",
  components: {
    Toolbar,
    Loader,
    Breadcrumbs
  },
  computed: {
    ...mapGetters(["getLoading"])
  }
};
</script>
<style>

</style>
