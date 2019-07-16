<template>
  <v-container class="chat">
    <v-btn @click="logout">Logout</v-btn>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "chat",
  components: {},
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style>
</style>
