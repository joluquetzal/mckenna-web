import FlareVue from "@lkmx/flare-vue";
import "@lkmx/flare/src/flare.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
app.use(router);
app.use(FlareVue);
router.isReady().then(() => app.mount("#app"));
