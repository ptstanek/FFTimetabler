<script setup lang="ts">
// TODO: fix this bomboclattery

import { ref, emit } from 'vue';

const emit = defineEmits(['daySelected']);

const DayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const selectedDay = ref(0);

const clickHandler = (index: number) => {
    selectedDay.value = index;
    console.log(selectedDay.value);
    emit('daySelected', selectedDay.value)
};

</script>

<template>
    <div class="flex flex-row justify-center">
        <button @click="clickHandler(index)"class="border-1 m-1 p-2 bg-white shadow-2xl w-10 rounded-sm focus:ring ring-blue-400 ring-inset" id="selectorButton" v-for="(day, index) in DayOfWeek">
            {{day.toString()[0]}}
        </button>
    </div>
</template>

<style scoped>
button {
    font-family: Consolas
}
</style>