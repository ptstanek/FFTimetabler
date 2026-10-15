import { ref } from "vue";
import { defineStore } from "pinia";
import { TimetableItemType } from "../Types";
import { v4 as uuidv4 } from "uuid";

export const useTimetableItemStore = defineStore("timetableitems", () => {
  const timetableItems = ref<TimetableItemType[]>([]);

  function loadFromLocalStorage() {
    if(localStorage.getItem("items") !== null) {
      timetableItems.value = JSON.parse(localStorage.getItem("items")!);
    }
  }

  function add(item: TimetableItemType) {
    timetableItems.value.push(item);
    // I don't like how all of the items are saved to localstorage when a new item is made/
    // maybe fix it later
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(timetableItems.value));
  }

  function removeItem(item: TimetableItemType) {
    timetableItems.value = timetableItems.value.filter(
      (i) => i.uuid !== item.uuid,
    );

    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(timetableItems));
  }
  return { timetableItems, add, removeItem, loadFromLocalStorage };
});
