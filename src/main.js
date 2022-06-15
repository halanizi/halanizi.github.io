import { createApp } from "vue";
import App from "./App.vue";
import HeaderBar from "./components/HeaderBar.vue";
import HomeComponent from "./components/HomeComponent.vue";
import "bootstrap/dist/css/bootstrap.css";

import JQuery from "jquery";
window.$ = JQuery;

const app = createApp(App);
app.component("HeaderBar", HeaderBar);
app.component("HomeComponent", HomeComponent);
app.mount("#app");
