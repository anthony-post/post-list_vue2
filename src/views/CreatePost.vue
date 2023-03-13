<template>
  <div class="create">
    <div class="title-wrapper">
      <BaseIcon name="file-plus" width="30" height="30"></BaseIcon>
      <h1 class="title">Create post</h1>
    </div>
    <BaseInput
      v-model="postId"
      class="create__input"
      placeholder="enter ID"
      name="id"
      title="id"
      label="Post's ID"
      type="text"
      >Text</BaseInput
    >
    <BaseTextArea
      v-model="postText"
      class="create__textarea"
      label="Text"
      name="text"
    ></BaseTextArea>
    <router-link class="button-link" :to="{ name: 'post-list' }">
      <BaseButton class="button-item" type="button" theme="add" @click="addPost"
        >Add</BaseButton
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  components: {},
  data() {
    return {
      postId: null,
      postText: null,
    };
  },
  methods: {
    addPost() {
      this.$store.commit("ADD_POST", {
        id: this.postId,
        name: this.postText,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";
.create__input,
.create__textarea {
  margin-bottom: 20px;
}
</style>
