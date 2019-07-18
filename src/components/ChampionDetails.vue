<template>
  <v-container class="second">
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
    this.myEventHandler();
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      let background = document.getElementById("app");

      if (window.innerHeight > window.innerWidth) {
        console.log("portrait");
        background.style.backgroundImage =
          "url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
          this.getChamp.id +
          "_0.jpg)";
      } else {
        console.log("landscape");
        background.style.backgroundImage =
          "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
          this.getChamp.id +
          "_1.jpg)";
      }
      background.style.backgroundSize = "contain";
      background.style.backgroundColor = "black";
      background.style.backgroundRepeat = "no-repeat";
      background.style.backgroundPositionX = "center";
      background.style.backgroundAttachment = "fixed";
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

.second {
  background: rgba(255, 255, 255, 0.8);
  
}
@media (orientation: landscape) {
}
</style>
