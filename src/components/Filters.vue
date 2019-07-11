<template>
  <div>
    <div class="search-wrapper">
      <input
        class="search-box btn btn-outline-info"
        type="text"
        v-model="search"
        placeholder="Search champion"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: {
    search: ""
  },
  created() {
    this.searchFilter;
  },
  computed: {
    searchFilter() {
      return this.langFilter.filter(champion => {
        return (
          champion.id.toUpperCase().includes(this.search.toUpperCase()),
          champion.name.toUpperCase().includes(this.search.toUpperCase()),
          champion.tag.toUpperCase().includes(this.search.toUpperCase())
        );
      });
    }
  }
};
</script>

<style>

</style>
