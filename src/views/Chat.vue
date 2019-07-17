<template>
  <v-container class="chat">
    <h2 class="center teal-text">League of Legends Chat</h2>
    <div id="contairner" class="container">
      <div class="card-content">
        <ul class="messages text-xs-right">
          <v-card-text v-for="(value, key, index) in chats" :key="index">
            <span>{{value.photoURL}}</span>
            <br />
            <span
              class="teal-text"
              v-if="$store.state.user.displayName == value.name"
            >{{value.name}}</span>
            <br />
            <span class="grey-text text-darken-3">{{value.text}}</span>
            <br />
            <span class="grey-text time">{{value.date}}</span>
            <br />
          </v-card-text>
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
      chats: {}
    };
  },
  created() {
    console.log(this.$store.state.user);

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
body {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
}

.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
ul {
  width: 100%;
  height: 400px;
  overflow: scroll;
}

.darker {
  border-color: #ccc;
  background-color: #ddd;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.container img.right {
  float: right;
  margin-left: 20px;
  margin-right: 0;
}

.time-right {
  float: right;
  color: #aaa;
}

.time-left {
  float: left;
  color: #999;
}
</style>
