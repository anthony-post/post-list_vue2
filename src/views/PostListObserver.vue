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
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import PostCard from "@/components/PostCard.vue";
import Observer from "@/components/Observer.vue";

export default {
  name: "PostList",
  components: {
    PostCard,
    Observer,
  },
  data: () => ({
    startIndex: 0,
    endIndex: 15,
    step: 15,
  }),

  computed: {
    ...mapState({
      allPosts: (state) => state.posts,
      postList: (state) => state.postList,
    }),
    ...mapGetters(["FILTERED_POSTLIST_BY_TEXT"]),
  },
  methods: {
    clearSearchInput() {
      this.$store.commit("RESET_SEARCHTEXT");
    },

    async intersected() {
      if (this.postList.length < this.allPosts.length) {
        await this.GET_DATA({
          startIndex: this.startIndex,
          endIndex: this.endIndex,
        });
        this.startIndex = this.endIndex;
        this.endIndex = this.startIndex + this.step;
      }
    },

    ...mapActions(["GET_DATA"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.post-wrapper {
  padding-top: 150px;
}
</style>
