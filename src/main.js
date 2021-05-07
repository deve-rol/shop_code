import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

/* register global components */
import UiIcon from "./components/UiIcon";
Vue.component("UiIcon", UiIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
