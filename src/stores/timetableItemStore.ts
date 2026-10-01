import { ref } from 'vue';
import { defineStore } from 'pinia';
import { TimetableItemType } from '../Types';

export const useTimetableItemStore = defineStore('timetableitems', () => {
    const timetableItems = ref<TimetableItemType[]>([
        {
            className: "Software Eng",
            lecturerName: "Teacher",
            startTime: "9:30AM",
            classDuration: "1hr30min",
            roomNumber: "2.2.10",
            dayOfWeek: 1,
        },
        {
            className: "Software Eng",
            lecturerName: "Teacher",
            startTime: "9:30AM",
            classDuration: "1hr30min",
            roomNumber: "2.2.10",
            dayOfWeek: 1,
        },
        {
            className: "Software Eng",
            lecturerName: "Teacher",
            startTime: "9:30AM",
            classDuration: "1hr30min",
            roomNumber: "2.2.10",
            dayOfWeek: 2,
        },
    ]);

    function add(item: TimetableItemType) {
        timetableItems.value.push(item);
    }

    return {timetableItems, add};
});