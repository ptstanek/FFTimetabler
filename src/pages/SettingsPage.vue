<script setup lang="ts">

import QRComponent from '../components/QRComponent.vue';
import { useSettingsStore } from '../stores/settingsStore.ts';

const settingsStore = useSettingsStore();

const toggleRedTheme = () => {
    settingsStore.settings.redMode = !settingsStore.settings.redMode;
    console.log(settingsStore.settings.redMode);
    console.log(JSON.parse(localStorage.getItem("settings")!));
    settingsStore.saveSettings();
};

</script>

<template>
    <div class="ios-scroll">
        <QRComponent />
    </div>
    <div class="m-3">
        <input type="checkbox" id="redtheme"/>
        <label for="checkbox" class="pl-2" @click="toggleRedTheme">Red Theme</label>
    </div>
</template>

<style scoped></style>