<template></template>

<script>
export default {
  data() {
    return {
      champions: {}
    };
  },
  created() {
    this.getData();
    console.log("done with vue.js...");
  },
  methods: {
    getData() {
      console.log("get");
      const url = `https://ddragonexplorer.com/cdn/${this.getVersion}/data/en_US/runesReforged.json`;
      axios.get(url).then(response => {
        console.log(response);
        this.champions = response.data.data;
      });
    }
  }
};
</script>

<style>
</style>
