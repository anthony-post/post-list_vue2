<template>
  <div id="nav" class="nav nav-wrapper">
    <nav>
      <router-link :to="{ name: 'post-listobserver' }">Posts</router-link> |
      <router-link :to="{ name: 'post-create' }">Create</router-link>
    </nav>
    <BaseInput
      v-model.trim="postText"
      title="titleSearch"
      name="nameSearch"
      type="text"
      placeholder="Search"
    ></BaseInput>
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
  flex-direction: column;
  align-items: center;
}

.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 10;
  padding: 30px 0;
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
