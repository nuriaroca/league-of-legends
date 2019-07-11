<template>
  <div>
    <div class="search-wrapper">
      <input
        v-on:input="SET_SEARCH(search)"
        class="search-box btn-outline-info"
        type="text"
        v-model="search"
        placeholder="Search champion"
      />
    </div>

    <div>
      <v-radio-group class="radio" v-model="ex7" column>
        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
          value="all"
          id="all"
          label="All"
          color="indigo darken-3"
        ></v-radio>

        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
          value="fighter"
          id="figther"
          label="Fighter"
          color="indigo darken-3"
        ></v-radio>

        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
          value="tank"
          id="tank"
          label="Tank"
          color="indigo darken-3"
        ></v-radio>

        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
          value="assassin"
          id="assassin"
          label="Assassin"
          color="indigo darken-3"
        ></v-radio>

        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
          value="mage"
          id="mage"
          label="Mage"
          color="indigo darken-3"
        ></v-radio>

        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
          value="support"
          id="support"
          label="Support"
          color="indigo darken-3"
        ></v-radio>

        <v-radio
          v-on:input="SET_ROLE(role)"
          type="radio"
          name="role"
          v-model="role"
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
  }
};
</script>

<style>
.radio {
  display: flex;
}
</style>


