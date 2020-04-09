import Vue from 'vue'
import App from './App.vue'
import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";
import router from "./router/router";
import cookies from "vue-cookies";

Vue.use(SequentialEntrance);
Vue.use(cookies);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
