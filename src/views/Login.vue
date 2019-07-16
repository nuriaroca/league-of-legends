<template>
  <div class="login">
    <h3>Sing In</h3>
    <input type="text" />
    <br />
    <input type="text" />
    <br />
    <v-btn @clock="login">Connection</v-btn>
    <p>
      You don't have an account? You can
      <router-link to="/signup">create one</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    login: function() {
      this.$router.replace("home");
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
}
</style>
