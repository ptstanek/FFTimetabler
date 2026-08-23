<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import TimetableItem from "./components/TimetableItem.vue";

const today = Temporal.Now.plainDateISO().dayOfWeek;
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
</script>

<template>
  <div>
    <Header />
    <div class="m-2 text-lg">
      <h1>Today: {{ DayOfWeek[today - 1] }}</h1>
    </div>
    <div id="itemcontainer">
      <TimetableItem
        lecturerName="Teacher"
        startTime="9:30AM"
        className="Software Engineering"
        roomNumber="2.2.10"
        classDuration="1h30mins"
      />
      <TimetableItem />
      <TimetableItem />
      <TimetableItem />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
body {
  background-color: #f0f0f0;
}
</style>
