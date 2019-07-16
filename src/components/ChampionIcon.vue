<template>
  <div class="icon">
    <router-link :to="'/champion/'+champion.id">
      <img
        v-bind:src="'https://ddragon.leagueoflegends.com/cdn/' + getVersion + '/img/champion/' + champion.id + '.png'"
        alt="splashart"
      />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["champion"],
  computed: {
    ...mapGetters(["getVersion", "getChamp"])
  },
};
</script>

<style>
.icon {
  display: inline-block;
}
</style>
