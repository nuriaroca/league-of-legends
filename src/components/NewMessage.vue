<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message"></label>
      <div class="send">
        <v-flex class="write" xs12 sm6 md3>
          <v-text-field
            v-model="newMessage"
            label="Outline"
            placeholder="Write your message"
            outline
          ></v-text-field>
        </v-flex>
        <v-btn class="botoncito" @click="addMessage()">
          <v-icon>send</v-icon>
        </v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NewMessage",

  data() {
    return {
      newMessage: null
    };
  },
  methods: {
    addMessage() {
      let text = this.newMessage;
      let name = this.$store.state.user.displayName;
      let image = this.$store.state.user.photoURL;

      // let date = String.Format("{0:dd/MM/yyyy}", Date.now());
      let obj = {
        text,
        name,
        image
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
.send {
  display: flex;
}
.write {
  width: 80%;
}
.botoncito {
  width: 20%;
  height: 57px;
  border: solid;

  margin: 0 8px;
}
.v-btn {
  height: 57px;
}
@media (orientation: landscape) {
  .send {
    display: flex;
  }
  .write {
    max-width: 70%;
  }
  v-btn {
    width: 20%;
  }
}
</style>
