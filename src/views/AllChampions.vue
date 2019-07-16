<template>
  <div>
    <div>
      <Breadcrumbs :items="items"></Breadcrumbs>
      <Filters></Filters>
      <h1>Champions</h1>
      <!-- champion = value (data), key = nom, index = position -->
      <div class="icons">
        <ChampionIcon
          v-for="(champion, key, index) in roleFilter"
          v-bind:key="index"
          v-bind:champion="champion"
        ></ChampionIcon>
      </div>
    </div>
  </div>
</template>

<script>
import ChampionIcon from "../components/ChampionIcon";
import Breadcrumbs from "../components/Breadcrumbs";
import axios from "axios";
import Filters from "../components/Filters";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ChampionIcon,
    Breadcrumbs,
    Filters
  },
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
          disabled: true,
          to: "/AllChampions"
        }
      ]
    };
  },
  created() {
    this.getAllChamps();
  },
  methods: {
    ...mapActions(["getAllChamps"])
  },
  computed: {
    ...mapGetters(["getRole", "getSearch", "getChamps"]),

    roleFilter() {
      return Object.values(this.getChamps).filter(champion =>
        champion.tags.includes(this.getRole)
      );
    },
    searchFilter() {
      return Object.search(this.getChamps).filter(champion => {
        return champion.name.match(this.getSearch);
      });

      // return search(this.champions).this.roleFilter.filter(champions => {
      //   return (
      //     this.champions.id.toUpperCase().includes(this.search.toUpperCase()),
      //     this.champions.name.toUpperCase().includes(this.search.toUpperCase())
      //   );
      // });
    }
  }
};
</script>

<style scoped>
.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
