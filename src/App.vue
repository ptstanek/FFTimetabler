<script setup lang="ts">
import { ref, computed, provide, onMounted, watch } from "vue";
import Header from "./components/Header.vue";
import TimetableItem from "./components/TimetableItem.vue";
import { TimetableItemType, DayOfWeek } from './Types';
import DaySelector from "./components/DaySelector.vue";
import RouterBar from "./components/RouterBar.vue";

import { Calendar } from "@lucide/vue";
import { Temporal } from "@js-temporal/polyfill";

import { RouterView } from "vue-router";
import { useSettingsStore } from "./stores/settingsStore.ts";

import { defaultTheme, redTheme, Theme } from './util/themes.ts';

const settingsStore = useSettingsStore();

// This should be synchronous if loadFromLocalStorage reads localStorage directly.
settingsStore.loadFromLocalStorage();

if(settingsStore.settings.redMode) {
  provide('selectedtheme', { bgcolour: redTheme.bgcolour, buttoncolour: redTheme.buttoncolour } as Theme)
}
else {
  provide('selectedtheme', { bgcolour: defaultTheme.bgcolour, buttoncolour: defaultTheme.buttoncolour } as Theme)
}

onMounted(async () => {
  try {
    const storage = navigator.storage;

    if (storage?.persist) {
      const persistent = await storage.persist();
      console.log(persistent ? "STORAGE PERSISTENT" : "not persistent");
    }
  } catch (error) {
    console.warn("Could not request persistent storage:", error);
  }
});

</script>

<template>
  <div id="clappeddiv" class="flex flex-col h-screen">
    <Header />
    <main class="min-h-0 flex-1 overflow-y-scroll ios-scroll"   :style="{
      backgroundImage: !settingsStore.settings.redMode
        ? `linear-gradient(0deg, #ffffff 52%, ${defaultTheme.bgcolour} 100%)`
        : `linear-gradient(0deg, #ffffff 52%, ${redTheme.bgcolour} 100%)`
    }">
    <RouterView />
    </main>

    <RouterBar class="" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

#clappeddiv {
  height: 100dvh;
  width: 100%
}

body {
  background: #ffffff;
  /*background: linear-gradient(0deg,
      rgba(255, 255, 255, 0.25) 52%,
      rgba(209, 254, 255, 1) 100%); */
  background-attachment: fixed;
  height: 100dvh;
  overflow: hidden;
}
</style>