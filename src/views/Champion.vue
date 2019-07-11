<template>
  <v-container>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <h1 v-if="champion">{{champion.name}}</h1>
    <h3>{{champion.title}}</h3>
    <ChampionDetails v-bind:champion="champion" v-if="champion"></ChampionDetails>
  </v-container>
</template>

<script>
import ChampionDetails from "../components/ChampionDetails";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    Breadcrumbs,
    ChampionDetails
  },
  props: ["championName"],
  data() {
    return {
      champion: null,
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "All champions",
          disabled: false,
          to: "/AllChampions"
        },
        {
          text: this.championName,
          disabled: true,
          to: `/champion/${this.championName}`
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log("get");
      const url = `https://ddragon.leagueoflegends.com/cdn/${this.getVersion}/data/en_US/champion/${this.championName}.json`;
      axios.get(url).then(response => {
        console.log(response);
        this.champion = response.data.data[this.championName];
      });
    }
  },
  computed: {
    ...mapGetters(["getVersion"])
  }
};
</script>

<style>
h1 {
  margin-left: 16px;
}
h3 {
  margin-left: 16px;
  font-style: italic;
}
</style>
