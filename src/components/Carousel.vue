<template>
  <v-carousel max="100%" height="200" hide-delimiters touch>
    <v-carousel-item
      v-for="(skin,i) in champion.skins"
      :key="i"
      :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champion.id + '_' + skin.num + '.jpg'"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>
// v-if="i!== 0"
<script>
export default {
  props: ["champion"],
  data() {
    return {};
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
