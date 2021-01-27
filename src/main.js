import "./styles/style.scss";
import "ant-design-vue/dist/antd.css";

import Antd from "ant-design-vue";
import VueAnimXYZ from "@animxyz/vue";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAnimXYZ);
Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");