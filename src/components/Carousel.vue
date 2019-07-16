<template>
  <v-carousel max="100%" height="200" hide-delimiters>
    <v-carousel-item
      v-for="(skin,i) in getChamp.skins"
      :key="i"
      :src="'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + getChamp.id + '_' + skin.num + '.jpg'"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>
// v-if="i!== 0"
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getChamp"])
  }
};
</script>

<style lang="stylus">
#example-custom-transition {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
</style>
