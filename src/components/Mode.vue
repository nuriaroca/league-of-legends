<style>
.modes {
  display: flex;
  align-content: space-between;
  align-items: center;
  text-align: justify;
  max-width: 500px;
}
.mapimg {
  height: 100px;
  width: 100px;
  align-self: baseline;
  margin-right: 1em;
}
h2 {
  text-align: left;
}
</style>


<template>
  <v-container class="modes">
    <img
      class="mapimg"
      v-bind:src="'https://ddragon.leagueoflegends.com/cdn/9.13.1/img/map/' + mode.image"
      alt="map"
    />
    <div class="mapinfo">
      <h2>{{mode.title}}</h2>
      <p>{{mode.desc}}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {};
  }
};
</script>

<style>
.modes {
  display: flex;
  align-content: space-between;
  align-items: center;
  text-align: justify;
  max-width: 500px;
}
.mapimg {
  height: 100px;
  width: 100px;
  align-self: baseline;
  margin-right: 1em;
}
h2 {
  text-align: left;
}
</style>
