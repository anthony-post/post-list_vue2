<template>
  <div>
    <router-link
      class="post-link"
      :to="{ name: 'post-edit', params: { id: post.id, name: post.name } }"
    >
      <div class="post-card -shadow" @click="$emit('click')">
        <p class="post__title">{{ post.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";
.post-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.post-card > .post__title {
  margin: 0;
}
.post-link {
  color: $color-text;
  text-decoration: none;
  font-weight: 100;
}

.icon-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
