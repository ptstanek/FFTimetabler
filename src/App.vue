<script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);
const clickCallback = (): void => {
  counter.value++;
};
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">{{counter}}</h1>
    <button @click="clickCallback">button</button>
  </div>
</template>

<style scoped></style>
