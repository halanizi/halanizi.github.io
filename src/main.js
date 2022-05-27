import { createApp } from "vue";
import App from "./App.vue";
import HeaderBar from "./components/HeaderBar.vue";

import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
app.component("HeaderBar", HeaderBar);
app.mount("#app");
