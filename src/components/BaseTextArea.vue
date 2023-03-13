<template>
  <div class="input-wrp">
    <label class="label label__box" :for="name">{{ label }}</label>
    <textarea
      cols="30"
      rows="10"
      :name="name"
      :value="value"
      class="textarea textarea__field textrea__text"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/styles.scss";

.textarea {
  &__field {
    background: $color-white;
    border: 0.5px solid $color-border;
    box-sizing: border-box;
    border-radius: 4px;
    &:focus {
      outline: 0.5px ridge $color-green-lite;
    }
  }
}
</style>
