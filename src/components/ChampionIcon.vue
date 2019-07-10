<template>
  <div class="icon">
    <router-link :to="'/champion/'+champion.id">
      <img
        v-bind:src="'http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/' + champion.id + '.png'"
        alt="splashart"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["champion"],
  data() {
    return {};
  }
};
</script>

<style>
.icon {
  display: inline-block;
}
</style>
