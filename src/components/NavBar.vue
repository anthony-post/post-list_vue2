<template>
  <div id="nav" class="nav nav-wrapper">
    <BaseInput
      v-model.trim="postText"
      title="titleSearch"
      name="nameSearch"
      type="text"
      placeholder="Search"
    ></BaseInput>
    <nav>
      <router-link :to="{ name: 'post-list' }">Posts</router-link> |
      <router-link :to="{ name: 'post-create' }">Create</router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      text: null,
    };
  },
  computed: {
    ...mapState({
      searchText: (state) => state.searchText,
    }),
    postText: {
      get: function () {
        return this.searchText;
      },
      set: function (newValue) {
        this.$store.commit("SET_SEARCHTEXT", {
          name: newValue,
        });
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";
.search-wrapper {
  display: flex;
  align-items: center;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-wrapper {
  margin-bottom: 30px;
}
.nav > .brand {
  font-family: $ff;
  font-weight: 700;
  font-size: 1.5em;
  color: $color-green-lite;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: $color-green-lite;
  border-bottom: solid 2px $color-green-lite;
}
</style>
