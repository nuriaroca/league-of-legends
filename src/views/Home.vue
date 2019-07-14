<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <div v-for="(item,i) in items" :key="i" class="card">
          <v-img :src="item.image" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link :to="item.to">
              <v-btn color="dark">Explore</v-btn>
            </router-link>
          </v-card-actions>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "../images/la_grieta.jpg",
          title: "Game modes",
          description:
            'League of Legends offers a number of different maps for you to conquer. These battlegrounds, or "Fields of Justice," each feature different terrain, objectives and victory conditions, as well as varied summoner spells and items.',
          to: "/game-modes"
        },
        {
          image: "../images/jinx.jpg",
          title: "Champions",
          description:
            "League of Legends features an ever-expanding roster of champions, each with a unique design and playstyle. Here you can browse the current lineup and find out more about characters that interest you.",
          to: "/allchampions"
        },
        {
          image: "../images/ChoGath.jpg",
          title: "Items and Equipment",
          description:
            "As the game progresses you’ll acquire gold you can spend on powerful items that improve your champions performance on the Fields of Justice. Items can provide all manner of useful bonuses such as faster movement, improved damage, increased durability, reduced ability cooldowns, etc. You can purchase items from the shop near the summoner platform where you spawn at the beginning of a game.",
          to: "/items"
        }
      ]
    };
  }
};
</script>

<style>
.card {
  margin-top: 20px;
}
v-btn {
}
</style>
