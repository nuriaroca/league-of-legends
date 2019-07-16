<template>
  <v-container class="chat">
    <button @click="logout">Logout</button>
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
