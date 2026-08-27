<script setup lang="ts">
import { House, Wand, Settings}  from '@lucide/vue';
</script>

<template>
    <div class="flex justify-evenly">
        <House size="50" class="p-3 m-3 border-1 border-gray-400 rounded-lg"/> 
        <Wand size="50" class="p-3 m-3 border-1 border-gray-400 rounded-lg"/>
        <Settings size="50" class="p-3 m-3 border-1 border-gray-400 rounded-lg"/> 
    </div>
</template>

<style scoped>

div {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    border-top: solid 1px;
}

</style>