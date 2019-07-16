<template>
  <v-container>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <h1>Items and Equipment</h1>
    <p>As the game progresses you’ll acquire gold you can spend on powerful items that improve your champions performance on the Fields of Justice. Items can provide all manner of useful bonuses such as faster movement, improved damage, increased durability, reduced ability cooldowns, etc. You can purchase items from the shop near the summoner platform where you spawn at the beginning of a game.</p>
    <Item v-for="(item, key, index) in getItems" v-bind:key="index" :item="item"></Item>
  </v-container>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import Item from "../components/Item";

export default {
  components: {
    Item,
    Breadcrumbs
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Items",
          disabled: true,
          to: "/Items"
        }
      ]
    };
  },
  created() {
    this.getAllItems();
  },
  methods: {
    ...mapActions(["getAllItems"])
  },
  computed: {
    ...mapGetters(["getItems"])
  }
};
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
