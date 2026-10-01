<script setup lang="ts">
import { ref, computed, provide } from "vue";
import Header from "./components/Header.vue";
import TimetableItem from "./components/TimetableItem.vue";
import { TimetableItemType, DayOfWeek } from './Types';
import DaySelector from "./components/DaySelector.vue";
import RouterBar from "./components/RouterBar.vue";

import { Calendar } from "@lucide/vue";
import { Temporal } from "@js-temporal/polyfill";

import { RouterView } from "vue-router";

</script>

<template>
  <div id="clappeddiv" class="flex flex-col ">
    <Header />
    <RouterView class="h-full overflow-y-auto"/>
    <RouterBar />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

#clappeddiv {
  height: 100vh;
  width: 100%
}

body {
  background: #ffffff;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.25) 52%,
    rgba(209, 254, 255, 1) 100%
  );
  background-attachment: fixed;
}

</style>
