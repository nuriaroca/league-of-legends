<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message"></label>
      <input type="text" name="new-message" v-model="newMessage" />
      <v-btn>
        <v-icon>send</v-icon>
      </v-btn>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null
    };
  },
  methods: {
    addMessage() {
      console.log(this.newMessage, this.name, Date.now());
      let text = this.newMessage;
      let name = this.$store.state.user.displayName;
      // let date = String.Format("{0:dd/MM/yyyy}", Date.now());
      let obj = {
        text,
        name
      };
      firebase
        .database()
        .ref("chat")
        .push(obj);
      this.newMessage = "";
    }
  }
};
</script>

<style>
</style>
