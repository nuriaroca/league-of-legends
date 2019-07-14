<template>
  <v-container>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <h1>Items and Equipment</h1>
    <p>As the game progresses you’ll acquire gold you can spend on powerful items that improve your champions performance on the Fields of Justice. Items can provide all manner of useful bonuses such as faster movement, improved damage, increased durability, reduced ability cooldowns, etc. You can purchase items from the shop near the summoner platform where you spawn at the beginning of a game.</p>
    <Item v-for="(pepino, key, index) in pepinos" v-bind:key="index"></Item>
  </v-container>
</template>

<script>
import Item from "../components/Item";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";

export default {
  components: {
    Item,
    Breadcrumbs
  },
  data() {
    return {
      pepinos: {},
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Items",
          disabled: false,
          to: "/Items"
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `https://ddragonexplorer.com/cdn/${this.getVersion}/data/en_US/item.json`;
      axios.get(url).then(response => {
        console.log(response);
        this.items = response.data.data;
      });
    }
  }
};
</script>

<style>
p {
  text-align: justify;
}
</style>
