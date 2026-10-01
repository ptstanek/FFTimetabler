<script setup lang="ts">
import { House, Wand, Settings } from '@lucide/vue';
import { router } from '../util/router';
import { LucideProps } from '@lucide/vue';

// binding the size number stops the type errors.

</script>

<template>
    <div class="flex justify-evenly">
        <House @click="router.push('/')" :size="50"
            class="p-3 m-3 border-1 border-gray-400 rounded-lg cursor-pointer" />
        <Wand @click="router.push('/new')" :size="50"
            class="p-3 m-3 border-1 border-gray-400 rounded-lg cursor-pointer" />
        <Settings :size="50" class="p-3 m-3 border-1 border-gray-400 rounded-lg cursor-pointer" />
    </div>
</template>

<style scoped>
div {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    border-top: solid 1px;
    z-index: 10;
    background-color: white; 
}
</style>