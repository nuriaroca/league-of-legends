<template>
  <div>
    <!-- <v-button>
      <img src="../public/images/menu.png" />
    </v-button>-->
    <v-layout wrap style="height: 200px;">
      <v-container>
        <v-layout justify-center>
          <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
        </v-layout>
      </v-container>

      <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute dark temporary>
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <!-- <v-img></v-img> -->
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
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard", to: "/Index" },
        {
          title: "All Champions",
          icon: "question_answer",
          to: "/AllChampions"
        },
        { title: "Game Modes", icon: "dashboard", to: "/Game-modes" },
        { title: "Chat", icon: "question_answer" }
      ],
      mini: false,
      right: null
    };
  }
};
</script>

<style>
/* v-btn {
  position: sticky;
} */
</style>
