<template>
  <div class="input-wrp">
    <label class="input__label label label__box" :for="name">{{ label }}</label>
    <input
      class="input input__field input__text"
      autocomplete="off"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :title="title"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    title: {
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
.input-wrp {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.input {
  &__field {
    background: $color-white;
    border: 0.5px solid $color-border;
    box-sizing: border-box;
    border-radius: 4px;
    &:focus {
      outline: 0.5px ridge $color-blue;
    }
  }
  &__text {
    font-family: $ff;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 13px;
    color: $color-text;
  }
}
</style>
