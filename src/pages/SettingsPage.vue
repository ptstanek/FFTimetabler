<script setup lang="ts">

import QRComponent from '../components/QRComponent.vue';
import { useSettingsStore } from '../stores/settingsStore.ts';
import { onMounted, ref, inject } from 'vue';

const settingsStore = useSettingsStore();

const toggleRedTheme = () => {
    settingsStore.settings.redMode = !settingsStore.settings.redMode;
    // console.log(settingsStore.settings.redMode);
    console.log(JSON.parse(localStorage.getItem("settings")!));
    settingsStore.saveSettings();
};

</script>

<template>
    <div class="ios-scroll">
        <QRComponent />
    </div>
    <div class="m-3">
        <input type="checkbox" @change="toggleRedTheme" :checked="settingsStore.settings.redMode" id="redtheme"/>
        <label for="checkbox" class="pl-2">Red Theme</label>
    </div>
</template>

<style scoped></style>