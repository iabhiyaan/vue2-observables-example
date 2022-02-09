import Vue from "vue";

import App from "./App.vue";

import todoStore from "./composables/useTodoStore";
import cartStore from "./composables/useCartStore";
import vueCompositionApi from "@vue/composition-api";

import store from "./store";

Vue.use(vueCompositionApi);

Vue.config.productionTip = false;

Vue.prototype.$todoStore = todoStore;
Vue.prototype.$cartStore = cartStore;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
