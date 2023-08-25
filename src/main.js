import { createApp } from "vue";
import App from "./App.vue";
import FAB from "./components/UI/baseFAB.vue";
import TodoTile from "./components/UI/baseTodo.vue";
import "./main.css";

const app = createApp(App);
app.component("base-fab", FAB);
app.component("TodoTile", TodoTile);
app.mount("#app");
