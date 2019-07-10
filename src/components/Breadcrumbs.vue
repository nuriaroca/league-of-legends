<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        to: "/Index"
      },
      {
        text: "Game Modes",
        disabled: false,
        href: "../Game-modes"
      },
      {
        text: "All champions",
        disabled: false,
        to: "/AllChampions"
      },
      {
        text: "Champion",
        disabled: false,
        to: "../champion/'+champion.id'"
      }
    ]
  })
};
</script>

<style>
</style>
