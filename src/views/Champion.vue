<template>
  <v-container>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <div class="title">
      <h1 v-if="getChamp">{{getChamp.name}}</h1>
      <h3 v-if="getChamp">{{getChamp.title}}</h3>
    </div>
    <ChampionDetails v-if="getChamp"></ChampionDetails>
  </v-container>
</template>

<script>
import ChampionDetails from "../components/ChampionDetails";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Breadcrumbs,
    ChampionDetails
  },
  props: ["championName"],

  data() {
    return {
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
    this.getUniqueChampion(this.championName);
  },
  computed: {
    ...mapGetters(["getChamp"])
  },
  methods: {
    ...mapActions(["getUniqueChampion"])
  }
};
</script>

<style scoped>
h1 {
  margin-left: 16px;
  padding-top: 10px;
}
h3 {
  margin-left: 16px;
  font-style: italic;
}
.title {
  background: rgba(255, 255, 255, 0.8);
}
</style>
