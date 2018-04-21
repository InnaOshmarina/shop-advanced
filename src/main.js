import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './api/firebase';
import VueFire from 'vuefire';
import VueCharts from 'vue-chartjs';
import store from "./store";
import "./registerServiceWorker";

Vue.use(BootstrapVue);
Vue.use(VueFire);
Vue.use(VueCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  BootstrapVue,
  store,
  render: h => h(App)
}).$mount("#app");
