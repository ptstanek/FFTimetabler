import TimetablePage from "..//pages/TimetablePage.vue";
import NewItemPage from "../pages/NewItemPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";

import { createMemoryHistory, createRouter, RouteLocation, RouteLocationPathRaw, RouteLocationRaw } from "vue-router";

const routes = [ 
  { path: "/", component: TimetablePage },
  { path: "/new", component: NewItemPage},
  { path: "/settings", component: SettingsPage}
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});

