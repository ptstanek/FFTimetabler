import { defineStore } from 'pinia';
import { ref, provide } from 'vue';

const defaultSettings = { 
    redMode: false,
};

export const useSettingsStore = defineStore("settings", () => {
    const settings = ref({
        // redMode: false
    });

    function saveSettings() {
        localStorage.setItem("settings", JSON.stringify(settings.value));
    }

    function loadFromLocalStorage() {
        const stored = localStorage.getItem('settings');

        if(stored !== null) {
            settings.value = {
                ...defaultSettings,
                ...JSON.parse(stored),
            }
        }
    }

    return { settings, saveSettings, loadFromLocalStorage };
})