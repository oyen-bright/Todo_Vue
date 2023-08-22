import { createApp } from "vue";
import App from "./App.vue";
import FAB from "./components/UI/baseFAB.vue";
import "./main.css";

const app = createApp(App);
app.component("base-fab", FAB);
app.mount("#app");
