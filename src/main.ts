import { createApp, provide } from 'vue';
import App from "./App.vue";
import { router } from "./util/router.ts";
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

// createApp(App).use(router).mount("#app");

app.use(pinia).use(router).mount('#app');


