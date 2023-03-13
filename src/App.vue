<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: $ff;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  box-sizing: border-box;
  width: 600px;
  padding: 0 20px 20px;
  margin: 0 auto;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 100vw;
  }
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: $color-green-lite;
  font-weight: 600;
  background-color: transparent;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
img {
  border-style: none;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $ff;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid $color-green-lite;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 15px;
  color: $color-text;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  width: 100%;
  padding: 0 10px;
}
[type="text"]:focus,
[type="number"]:focus,
[type="search"]:focus,
[type="password"]:focus {
  border-color: $color-green-lite;
}
input[type="text"] {
  height: 2.5em;
  resize: none;
  font-family: $ff;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 13px;
  color: $color-text;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    height: 2em;
  }
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}

select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: $color-green-lite;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}

.title {
  font-family: $ff;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 12px;
  color: $color-text;
}

.label {
  font-family: $ff;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 12px;
  color: $color-label;
}

.label__box {
  margin: 0 0 1em 0;
}

.title-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
}
</style>
