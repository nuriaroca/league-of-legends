<template>
  <v-container>
    <p>{{getChamp.lore}}</p>
    <Carousel :champion="getChamp"></Carousel>
  </v-container>
</template>

<script>
import Carousel from "./Carousel";
import { mapGetters } from "vuex";

export default {
  components: {
    Carousel
  },
  updated() {
    if (media(orientation == landscape)) {
      document.getElementById("app").style.backgroundImage =
        "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
        this.champion.id +
        "_0.jpg)";
      document.getElementById("app").style.backgroundSize = "contain";
      document.getElementById("app").style.backgroundColor = "black";
      document.getElementById("app").style.backgroundRepeat = "no-repeat";
      document.getElementById("app").style.backgroundPositionX = "center";
      document.getElementById("app").style.backgroundAttachment = "fixed";
    } else {
      document.getElementById("app").style.backgroundImage =
        "url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
        this.getChamp.id +
        "_0.jpg)";
      document.getElementById("app").style.backgroundSize = "contain";
      document.getElementById("app").style.backgroundColor = "black";
      document.getElementById("app").style.backgroundRepeat = "no-repeat";
      document.getElementById("app").style.backgroundAttachment = "fixed";
    }
  },
  beforeDestroy() {
    document.getElementById("app").style.background = "white";
  },
  computed: {
    ...mapGetters(["getChamp"])
  }
};
</script>

<style>
p {
  text-align: justify;
}
/* 
@media (orientation: landscape) {
 
} */
</style>
