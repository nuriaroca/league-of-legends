<template>
  <div>
    <div class="search-wrapper">
      <input
        @input="SET_SEARCH(search)"
        class="search-box btn-outline-info"
        type="text"
        v-model="search"
        placeholder="Search champion"
      />
    </div>

    <div>
      <v-radio-group class="radio" v-model="role">
        <v-radio name="role" type="radio" value="all" id="all" label="All" color="indigo darken-3"></v-radio>

        <v-radio name="role" value="fighter" id="figther" label="Fighter" color="indigo darken-3"></v-radio>

        <v-radio name="role" value="tank" id="tank" label="Tank" color="indigo darken-3"></v-radio>

        <v-radio
          name="role"
          value="assassin"
          id="assassin"
          label="Assassin"
          color="indigo darken-3"
        ></v-radio>

        <v-radio name="role" value="mage" id="mage" label="Mage" color="indigo darken-3"></v-radio>

        <v-radio name="role" value="support" id="support" label="Support" color="indigo darken-3"></v-radio>

        <v-radio
          name="role"
          value="marksman"
          id="marksman"
          label="Marksman"
          color="indigo darken-3"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      search: "",
      role: "",

      ex7: "red",
      ex8: "primary"
    };
  },
  methods: {
    ...mapMutations(["SET_SEARCH", "SET_ROLE"])
  },
  watch: {
    role(val) {
      this.SET_ROLE(val);
    }
  }
};
</script>

<style>
.radio {
  display: flex;
}
</style>


