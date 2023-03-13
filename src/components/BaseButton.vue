<template>
  <div>
    <button
      :type="type"
      :class="['base-button', getThemeButton]"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
      required: true,
    },
    theme: {
      type: String,
      default: "add",
      validator: (theme) => ["add", "delete", "edit"].includes(theme),
    },
  },
  computed: {
    getThemeButton() {
      return `base-button_${this.theme}`;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  font-family: $ff;
  font-style: normal;
  font-weight: 400;
  font-size: 11.5px;
  line-height: 13px;
  text-align: center;
  color: $color-white;
  border-radius: 4px;
  cursor: pointer;
  &_add {
    background: $color-green-lite;
    border: 0.5px solid $color-green-lite;
    &:hover {
      background: linear-gradient(90deg, #40ff60 2.61%, #64ffa5 112.6%);
    }
    &:active {
      background: linear-gradient(90deg, #40ff60 2.61%, #64ffa5 112.6%);
    }
  }
  &_delete {
    background: $color-button-delete;
    border: 0.5px solid $color-button-delete;
    &:hover {
      background: linear-gradient(90deg, #c74d62 2.61%, #c9657a 112.6%);
    }
    &:active {
      background: linear-gradient(90deg, #c74d62 2.61%, #c9657a 112.6%);
    }
  }
  &_edit {
    color: $color-text;
    background: $color-button-cancel;
    border: 0.5px solid $color-button-cancel;
    &:hover {
      background: linear-gradient(90deg, #d2cccc 2.61%, #efefef 112.6%);
    }
    &:active {
      background: linear-gradient(90deg, #d2cccc 2.61%, #efefef 112.6%);
    }
  }
}
</style>
