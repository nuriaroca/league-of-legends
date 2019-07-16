<template>
  <v-container>
    <Breadcrumbs :items="items"></Breadcrumbs>
    <h1>Game modes</h1>
    <mode v-for="(map, index) in maps" v-bind:key="index" v-bind:mode="map"></mode>
  </v-container>
</template>

<script>
import Mode from "../components/Mode";
import Breadcrumbs from "../components/Breadcrumbs";

export default {
  components: {
    Mode,
    Breadcrumbs
  },
  data() {
    return {
      maps: [
        {
          title: "Summoner's Rift",
          desc:
            "League of Legends' flagship Field of Justice, Summoner's Rift, remains the battleground of choice for the majority of players. Two teams of five champions battle across three lanes and an expansive jungle that holds powerful buffs and major neutral objectives. An extended laning phase and large-scale team fights are characteristic of this battlefield.",
          image: "map10.png"
        },
        {
          title: "The Twisted Treeline",
          desc:
            "The second Field of Justice added to League of Legends, Twisted Treeline, features two lanes and teams of three champions. Champions begin play with higher starting gold totals than Summoner's Rift, sparking fast engagements and frequent team fights. A single, centralized jungle between the lanes holds capturable altars that encourage battle over neutral objectives and frequent ganking.",
          image: "map11.png"
        },
        {
          title: "Howling Abyss",
          desc:
            "Inspired by the popular community game mode All Random All Mid, the Howling Abyss features two teams of five champions battling over a single lane. The summoner platform provides no healing and shopping is strictly limited to periods after your champion has died. This pushes the map toward aggressive, high-intensity gameplay centered on team fights.",
          image: "map12.png"
        }
      ],
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Game Modes",
          disabled: true,
          to: "/Game-modes"
        }
      ]
    };
  }
};
</script>

<style>

</style>

