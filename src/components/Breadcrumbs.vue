<template>
  <div class="bread">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style>
.bread {
  background: rgba(255, 255, 255, 0.8);
  border-bottom: solid;
  color: #c19232;
  padding-top: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.v-breadcrumbs {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
