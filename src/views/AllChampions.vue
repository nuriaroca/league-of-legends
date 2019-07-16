<template>
  <div>
    <div>
      <Breadcrumbs :items="items"></Breadcrumbs>
      <Filters></Filters>
      <h1>Champions</h1>
      <!-- champion = value (data), key = nom, index = position -->
      <div class="icons">
        <ChampionIcon
          v-for="(champion, key, index) in bothFilters"
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

    bothFilters() {
      return Object.values(this.getChamps)
        .filter(
          champion =>
            champion.tags.includes(this.getRole) || this.getRole == "all"
        )
        .filter(champion => {
          return champion.name
            .toLowerCase()
            .includes(this.getSearch.toLowerCase());
        });
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
