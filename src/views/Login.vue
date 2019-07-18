<template>
  <v-content class="welcome container">
    <div class="card-content center-align">
      <h2 class="teal-text">Community Chat</h2>
    </div>

    <v-btn @click="login">Sign in with Google</v-btn>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    login: function() {
      let that = this;
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          function(user) {
            console.log(user);
            that.$router.push("chat");
          },
          function(err) {
            console.log("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.welcome {
  max-width: 400px;
  margin-top: 70px;
}
.welcome h2 {
  font-size: 2em;
  text-align: center;
}

button {
  margin: 10px 0 0 103.206px;
  align-self: center;
}
@media (orientation: landscape) {
  .card {
    margin-left: 70px;
  }
  button {
    margin: 10px 0 0 103.206px;
    align-self: center;
  }
  .welcome h2 {
    font-size: 2em;
    margin-left: 87px;
    text-align: initial;
  }
}
</style>
