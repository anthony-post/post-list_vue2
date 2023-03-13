<template>
  <div class="card-wrapper">
    <div class="title-wrapper">
      <BaseIcon name="edit" width="30" height="30"></BaseIcon>
      <h1 class="title">Edit post</h1>
    </div>
    <span class="input__text">Id: {{ id }}</span>
    <BaseTextArea
      v-model="postText"
      class="create__textarea"
      name="text"
    ></BaseTextArea>
    <div class="button-wrapper">
      <router-link class="button-link" :to="{ name: 'post-list' }">
        <BaseButton
          class="button-item"
          type="button"
          theme="delete"
          @click="deletePost"
          >Delete</BaseButton
        >
      </router-link>
      <router-link class="button-link" :to="{ name: 'post-list' }">
        <BaseButton
          class="button-item"
          type="button"
          theme="edit"
          @click="editPost"
          >Edit</BaseButton
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostCard",
  props: ["id", "name"],
  data() {
    return {
      textAreaValue: null,
    };
  },
  computed: {
    postText: {
      get: function () {
        return this.name;
      },
      set: function (newValue) {
        this.textAreaValue = newValue;
      },
    },
    ...mapState({
      postList: (state) => state.postList.posts,
    }),
    getIndexPostInArray() {
      let index = null;
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].id === this.id) {
          index = i;
        }
      }
      return index;
    },
  },
  methods: {
    deletePost() {
      this.$store.commit("DELETE_POST", {
        indexInArray: this.getIndexPostInArray,
      });
    },
    editPost() {
      this.$store.commit("EDIT__POST", {
        id: this.id,
        name: this.textAreaValue,
        indexInArray: this.getIndexPostInArray,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";
.button-wrapper {
  display: flex;
  justify-content: space-between;
}

.button-link {
  text-decoration: none;
}
</style>
