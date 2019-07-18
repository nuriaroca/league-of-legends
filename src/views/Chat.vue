<template>
  <v-container class="chat">
    <h2 class="center teal-text">League of Legends Chat</h2>
    <div id="contairner" class="container">
      <div id="card-content" class="card-content">
        <div id="messages" class="messages text-xs-right">
          <v-card-text v-for="(value, key, index) in chats" :key="index">
            <div class="message" v-if="$store.state.user.displayName == value.name">
              <div class="text">
                <span style="font-weight:bold" class="teal-text">{{value.name}}</span>
                <br />
                <span class="grey-text text-darken-3">{{value.text}}</span>
              </div>
              <img :src="value.image" alt="avatar" />
              <!-- <span class="grey-text time">{{value.date}}</span> -->
            </div>

            <div class="darker lefties essage" v-else>
              <img :src="value.image" alt="avatar" />

              <div class="text">
                <span style="font-weight:bold" class="teal-text">{{value.name}}</span>
                <br />
                <span class="grey-text text-darken-3">{{value.text}}</span>
              </div>
              <!-- <span class="grey-text time">{{value.date}}</span> -->
            </div>
          </v-card-text>
        </div>
      </div>
      <div class="card-action">
        <NewMessage></NewMessage>
      </div>
    </div>
  </v-container>
</template>

<script>
import firebase from "firebase";
import NewMessage from "../components/NewMessage";

export default {
  name: "chat",
  components: {
    NewMessage
  },
  data() {
    return {
      chats: {},
      firstTime: true
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
          let container = document.getElementById("card-content");
          setTimeout(() => {
            container.scrollTo({
              top: container.scrollHeight,
              behavior: "smooth"
            });
          }, 200);
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
  height: 603px;
}

.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
#messages {
  width: 100%;
}

.darker {
  border-color: #ccc;
  background-color: #ddd;
  border-radius: 5px;
}

.container img {
  float: left;
  max-width: 50px;
  border-radius: 50%;
}
.message {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lefties {
  text-align: left;
}
.card-content {
  height: 400px;
  overflow-y: scroll;
  overflow-wrap: break-word;
}
img {
  border-style: none;
  margin-left: 10px;
  height: 50px;
  width: 50px;
  margin-right: 10px;
}
</style>
