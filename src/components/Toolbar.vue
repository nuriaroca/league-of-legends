<template>
  <div class="burger-menu">
    <!-- <v-toolbar-side-icon fixed @click.stop="drawer = !drawer"></!-->
    <v-btn icon @click.stop="drawer = !drawer">
      <img src="/Lol_Icon.png" class="menu_icon" alt="drawer" />
    </v-btn>
    <v-navigation-drawer v-model="drawer" :mini-variant="mini" fixed dark temporary>
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="/Lol_Icon.png" alt="logo" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>League Of Legends</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "home", to: "/" },
        { title: "Game Modes", icon: "dashboard", to: "/Game-modes" },
        {
          title: "All Champions",
          icon: "question_answer",
          to: "/AllChampions"
        },
        { title: "Items", icon: "dashboard", to: "/Items" },
        { title: "Community Chat", icon: "question_answer", to: "/Login" }
      ],
      mini: false,
      right: null
    };
  },
  computed: {
    ...mapGetters(["getTest"])
  }
};
</script>

<style scoped>
.menu_icon {
  position: fixed;
  width: 50px;
  z-index: 2;
  border-radius: 50%;
}

.burger-menu {
  padding: 14px 0 0 14px;
}
</style>
