import { createApp } from "vue";
import App from "./App.vue";
import HeaderBar from "./components/HeaderBar.vue"


const app = createApp(App);
app.component('HeaderBar', HeaderBar);
app.mount("#app");
