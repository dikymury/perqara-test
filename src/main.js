import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/app.css";
import "@/assets/css/feather.css";

createApp(App).use(router).mount("#app");
