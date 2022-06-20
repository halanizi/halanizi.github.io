import { createApp } from "vue";
import App from "./App.vue";
import HeaderBar from "./components/HeaderBar.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ProjectCard from "./components/ProjectCard.vue";

// DO NOT REMOVE THESE LINES OR BOOTSTRAP DEPENDENCIES WILL NOT WORK
import "bootstrap/dist/css/bootstrap.css";
import JQuery from "jquery";
window.$ = JQuery;
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);
app.component("HeaderBar", HeaderBar);
app.component("HomeComponent", HomeComponent);
app.component("AboutComponent", AboutComponent);
app.component("ProjectCard", ProjectCard);
app.mount("#app");
