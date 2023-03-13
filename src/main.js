import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue";

Vue.component("BaseInput", BaseInput);
Vue.component("BaseTextArea", BaseTextArea);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
