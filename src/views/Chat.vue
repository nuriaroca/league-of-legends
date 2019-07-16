<template>
  <v-container class="chat">
    <h2 class="center teal-text">League of Legends Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="(value, key, index) in chats" :key="index">
            <span class="teal-text">{{value.name}}</span>
            <br />
            <span class="grey-text text-darken-3">{{value.text}}</span>
            <br />
            <span class="grey-text time">{{value.date}}</span>
            <br />
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage name="name"></NewMessage>
      </div>
    </div>

    <v-btn @click="logout">Logout</v-btn>
  </v-container>
</template>

<script>
import firebase from "firebase";
import NewMessage from "../components/NewMessage";

export default {
  name: "chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      chats: {},
      date: String.Format("{0:dd/MM/yyyy}", Date.now)
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts: function() {
      let that = this;
      firebase
        .database()
        .ref("chat")
        .on("value", function(data) {
          var messages = data.val();
          that.chats = messages;
        });
    },
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

<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 1.2em;
}
</style>
