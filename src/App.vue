<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import TimetableItem from "./components/TimetableItem.vue";
import { TimetableItemType } from "./Types";
import DaySelector from "./components/DaySelector.vue";

const today = ref(Temporal.Now.plainDateISO().dayOfWeek);
const selectedDay = ref(0);
// the query for the api would then be for the user, and then the day of week to get all of the timetable items for that day.

const DayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const timetableItems: TimetableItemType[] = [
  {
    className: "Software Eng",
    lecturerName: "Teacher",
    startTime: "9:30AM",
    classDuration: "1hr30min",
    roomNumber: "2.2.10",
    dayOfWeek: 1,
  }
];

const daySelectedHandler = (day: number) => {
  console.log("app.vue - " + day);
  selectedDay.value = day+1;
}

</script>

<template>
  <div>
    <Header />
    <div class="m-2 text-lg">
      <h1>Today: {{ DayOfWeek[today - 1] }}</h1>
    </div>
    <p>{{DayOfWeek[selectedDay-1]}}</p>
    <DaySelector @daySelected="daySelectedHandler"/>
    <div id="itemcontainer">
      <div v-for="item in timetableItems">
        <TimetableItem
          :lecturerName="item.lecturerName"
          :startTime="item.startTime"
          :className="item.className"
          :roomNumber="item.roomNumber"
          :classDuration="item.classDuration"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
body {
  background-color: #f0f0f0;
}
</style>
