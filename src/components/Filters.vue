<template>
  <div>
    <div class="search">
      <v-flex xs12 sm6 md3>
        <v-text-field
          @input="SET_SEARCH(search)"
          v-model="search"
          placeholder="Search champion"
        ></v-text-field>
      </v-flex>
<!-- 
      <v-flex xs12 sm6 md3>
        <v-text-field
          @input="SET_SEARCH(search)"
          class="search-box btn-outline-info"
          type="text"
          v-model="search"
          label="Search champion"
        ></v-text-field> -->

    </div>

    <div>
      <v-radio-group class="radio" v-model="role">
        <v-layout justify-space-around>
          <label class="avatars">
            <v-radio name="role" type="radio" value="all" id="all" label="All"></v-radio>
            <img class="avatar" src="/images/All_icon.png" />
          </label>
          <label class="avatars">
            <v-radio name="role" value="Fighter" id="figther" label="Fighter"></v-radio>
            <img class="avatar" src="/images/Fighter_icon.png" />
          </label>
          <label class="avatars">
            <v-radio name="role" value="Tank" id="tank" label="Tank"></v-radio>
            <img class="avatar" src="/images/Tank_icon.png" />
          </label>
          <label class="avatars">
            <v-radio name="role" value="Assassin" id="assassin"></v-radio>
            <img class="avatar" src="/images/Assassin_icon.png" />
          </label>
          <label class="avatars">
            <v-radio name="role" value="Mage" id="mage" label="Mage"></v-radio>
            <img class="avatar" src="/images/Mage_icon.png" />
          </label>
          <label class="avatars">
            <v-radio name="role" value="Support" id="support" label="Support"></v-radio>
            <img class="avatar" src="/images/Support_icon.png" />
          </label>
          <label class="avatars">
            <v-radio name="role" value="Marksman" id="marksman" label="Marksman"></v-radio>
            <img class="avatar" src="/images/Marksman_icon.png" />
          </label>
        </v-layout>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      role: ""
    };
  },
  computed: {
    ...mapGetters(["getSearch"])
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

<style scoped>
.v-radio {
  display: none;
}

.avatars {
  width: 45px;
}

.avatar {
  width: 40px;
}

.accent--text + img {
  border-bottom: 2px groove #91753e;
}

.search {
  width: 50%;
  margin-left: 10px;

  padding-left: 20px;
  padding-right: 20px;
}
</style>


