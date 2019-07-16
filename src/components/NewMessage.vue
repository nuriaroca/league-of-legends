<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage" />
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
      let name = firebase.auth().currentUser.displayName;
      let obj = {
        text,
        name,
        date: Date.now()
      };
      firebase
        .database()
        .ref("chat")
        .push(obj);
    }
  }
};
</script>

<style>
</style>
