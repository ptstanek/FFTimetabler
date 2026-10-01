<script setup lang="ts">

import { ref, computed, provide } from "vue";
import Header from "../components/Header.vue";
import TimetableItem from "..//components/TimetableItem.vue";
import { TimetableItemType, DayOfWeek } from '../Types';
import DaySelector from "..//components/DaySelector.vue";
import RouterBar from "..//components/RouterBar.vue";
import { useTimetableItemStore } from "../stores/timetableItemStore.ts";

import { Calendar } from "@lucide/vue";
import { Temporal } from "@js-temporal/polyfill";

const itemStore = useTimetableItemStore();

const today = Temporal.Now.plainDateISO().dayOfWeek;
const selectedDay = ref(today);
// the query for the api would then be for the user, and then the day of week to get all of the timetable items for that day.

provide('today', today);

const daySelectedHandler = (day: number) => {
  console.log("app.vue - " + day);
  selectedDay.value = day + 1;
};

const filteredItems = computed(() => {
  //return timetableItems.value.filter((item: TimetableItemType) => item.dayOfWeek === selectedDay.value);
  return itemStore.timetableItems.filter((item: TimetableItemType) => item.dayOfWeek === selectedDay.value);
});

const testItem = () => { 
  console.log("adding item");

  itemStore.add(
    {
            className: "className.value",
            lecturerName: "lecturerName.value",
            roomNumber: "bomboclat",
            startTime: "startTime.value",
            classDuration: "duration.value",
            dayOfWeek: 1
    });
};

</script>

<template>
  <div>
    <div class="px-1 m-2 flex flex-row text-md py-0 bg-white shadow-xl ring-1 p-3 text-shadow-lg">
      <Calendar style="padding-right: 5px;"/>
      <h1><em>Today: {{ DayOfWeek[today-1] }}</em></h1>
    </div>
    <DaySelector @daySelected="daySelectedHandler" />
    <div id="itemcontainer">
      <div v-for="(item, index) in filteredItems" :key="index">
        <TimetableItem
          :lecturerName="item.lecturerName"
          :startTime="item.startTime"
          :className="item.className"
          :roomNumber="item.roomNumber"
          :classDuration="item.classDuration"
        />
      </div>
    </div>
    <button class="border" @click="testItem">testItem</button>
  </div>
</template>

<style scoped></style>