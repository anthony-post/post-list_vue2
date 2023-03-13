<template>
  <div class="post-wrapper">
    <div class="title-wrapper">
      <BaseIcon name="list" width="30" height="30"></BaseIcon>
      <h1 class="title">Post list</h1>
    </div>
    <PostCard
      v-for="post in FILTERED_POSTLIST_BY_TEXT"
      :key="post.id"
      :post="post"
      @click="clearSearchInput"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import PostCard from "@/components/PostCard.vue";

export default {
  name: "PostList",
  components: {
    PostCard,
  },
  computed: {
    ...mapState({
      postList: (state) => state.postList.posts,
    }),
    ...mapGetters(["FILTERED_POSTLIST_BY_TEXT"]),
  },
  methods: {
    clearSearchInput() {
      this.$store.commit("RESET_SEARCHTEXT");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";
</style>
