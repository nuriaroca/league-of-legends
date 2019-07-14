<template>
  <div class="text-xs-center">
    <v-dialog v-model="$store.state.loader">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-dialog>
  </div>
</template>
