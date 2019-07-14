<template>
  <v-container>
    <p>{{champion.lore}}</p>
    <Carousel :champion="champion"></Carousel>
  </v-container>
</template>

<script>
import Carousel from "./Carousel";

export default {
  props: ["champion"],
  components: {
    Carousel
  },
  created() {
    console.log(this.champion);
    //landscape
    // document.getElementById("app").style.backgroundImage =
    //   "url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
    //   this.champion.id +
    //   "_0.jpg)";
    // document.getElementById("app").style.backgroundSize = "contain";
    // document.getElementById("app").style.backgroundColor = "black";
    // document.getElementById("app").style.backgroundRepeat = "no-repeat";
    // document.getElementById("app").style.backgroundPositionX = "center";
    // document.getElementById("app").style.backgroundAttachment = "fixed";

    //portrait
    document.getElementById("app").style.backgroundImage =
      "url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
      this.champion.id +
      "_0.jpg)";
    document.getElementById("app").style.backgroundSize = "contain";
    document.getElementById("app").style.backgroundColor = "black";
    document.getElementById("app").style.backgroundRepeat = "no-repeat";
    document.getElementById("app").style.backgroundAttachment = "fixed";
  },
  beforeDestroy() {
    document.getElementById("app").style.background = "white";
  }
};
</script>

<style>
p {
  text-align: justify;
}
</style>
