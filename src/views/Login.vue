<template>
  <v-content class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Community Chat</h2>
      </div>
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
  margin-top: 100px;
}
.welcome h2 {
  font-size: 2em;
}
v-btn {
  margin: 30px auto;
}

/* .login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 40%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 50%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
} */
</style>
