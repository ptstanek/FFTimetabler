<script setup lang="ts">
// TODO: fix this bomboclattery

import { ref, emit, inject } from 'vue';
import { DayOfWeek } from '../Types';

const emit = defineEmits(['daySelected']);

const selectedDay = ref(inject('today').value-1); // not a fan of how this works but it does work

const clickHandler = (index: number) => {
    selectedDay.value = index;
    console.log(selectedDay.value);
    emit('daySelected', selectedDay.value)
};

</script>

<template>
    <div class="flex flex-row justify-center px-2">
        <button @click="clickHandler(index)" :class="{'selectorButton--selected': selectedDay === index}" class="selectorButton" v-for="(day, index) in DayOfWeek">
            {{day.toString()[0]}}
        </button>
    </div>
</template>

<style scoped>
button {
    font-family: Consolas
}

.selectorButton {
    border: 1px solid;
    margin: 0.25rem;
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 0.125rem;
}

.selectorButton--selected {
    background-color: #90c6fc;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>