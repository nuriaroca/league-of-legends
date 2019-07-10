<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <div v-for="(item,i) in items" :key="i" class="card">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              {{item.image}}
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link flat color="orange" :to="item.to">
              <v-btn>Explore</v-btn>
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
          image: "../public/images/la grieta.jpg",
          title: "Game modes",
          description:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
          to: "/game-modes"
        },
        {
          image: "",
          title: "All champions",
          description:
            "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
          to: "/allchampions"
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
</style>
