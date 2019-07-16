<template>
  <div class="login">
    <h3>Sing In</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="text" v-model="password" placeholder="Password" />
    <br />
    <v-btn @click="login">Connection</v-btn>
    <p>
      You don't have an account? You can
      <router-link to="/signup">create one</router-link>
    </p>
  </div>
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            this.$router.replace("chat");
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
/* .login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
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
