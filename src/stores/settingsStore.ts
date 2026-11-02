import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore("settings", () => {
    const settings = ref({
        redMode: false
    });

    function saveSettings() {
        localStorage.setItem("settings", JSON.stringify(settings.value));
    }

    function loadFromLocalStorage() {
        if(!localStorage.getItem("settings") === null) {
            settings.value = JSON.parse(localStorage.getItem("settings")!);
        }
    }

    return { settings, saveSettings, loadFromLocalStorage };
})