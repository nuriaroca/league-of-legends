<template>
  <v-content class="login">
    <h3>Community Chat</h3>
    <!-- <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="text" v-model="password" placeholder="Password" />
    <br />-->
    <v-btn @click="login">Sign in with Google</v-btn>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
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
            that.$router.replace("chat");
          },
          function(err) {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.login {
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
}
</style>
