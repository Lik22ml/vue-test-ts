import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// GLOBAL COMPONENTS
import BaseLink from "./components/ui/BaseLink.vue";
const app = createApp(App);
// USE COMPONENTS
app.component("BaseLink", BaseLink);
app.use(router);
app.mount("#app");
//# sourceMappingURL=main.js.map