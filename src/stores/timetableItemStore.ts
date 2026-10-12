import { ref } from "vue";
import { defineStore } from "pinia";
import { TimetableItemType } from "../Types";
import { v4 as uuidv4 } from "uuid";

export const useTimetableItemStore = defineStore("timetableitems", () => {
  const timetableItems = ref<TimetableItemType[]>([
    {
      className: "Software Eng",
      lecturerName: "Teacher",
      startTime: "9:30AM",
      classDuration: "1hr30min",
      roomNumber: "2.2.10",
      dayOfWeek: 1,
      uuid: uuidv4(),
    },
    {
      className: "Software Eng",
      lecturerName: "Teacher",
      startTime: "9:30AM",
      classDuration: "1hr30min",
      roomNumber: "2.2.10",
      dayOfWeek: 1,
      uuid: uuidv4(),
    },
    {
      className: "Software Eng",
      lecturerName: "Teacher",
      startTime: "9:30AM",
      classDuration: "1hr30min",
      roomNumber: "2.2.10",
      dayOfWeek: 2,
      uuid: uuidv4(),
    },
  ]);

  function add(item: TimetableItemType) {
    timetableItems.value.push(item);
  }

  function removeItem(item: TimetableItemType) {
    timetableItems.value = timetableItems.value.filter(
      (i) => i.uuid !== item.uuid);
  }
  return { timetableItems, add, removeItem };
});
