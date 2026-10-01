import TimetablePage from "..//pages/TimetablePage.vue";

import { createMemoryHistory, createRouter, RouteLocation, RouteLocationPathRaw, RouteLocationRaw } from "vue-router";
import NewItemPage from "../pages/NewItemPage.vue";

const routes = [ 
  { path: "/", component: TimetablePage },
  { path: "/new", component: NewItemPage}
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});

