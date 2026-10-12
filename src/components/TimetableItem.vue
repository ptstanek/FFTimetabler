<script setup lang="ts">
import { ref } from 'vue';
import { useTimetableItemStore } from '../stores/timetableItemStore';
import { TimetableItemType } from '../Types';

// class name
// day of the week
// starts at
// room
// duration
// lecturer

const props = defineProps({
    className: String,
    lecturerName: String,
    roomNumber: String,
    startTime: String,
    classDuration: String,
    dayOfWeek: Number,
    uuid: String
});

const timetableItems = useTimetableItemStore();

const drawerVisible = ref(false);

const toggleDrawer = () => {
    console.log("Drawer toggled.");
    drawerVisible.value = !drawerVisible.value;
};

const removeItemHandler = () => {
    // timetableItems.
    // const timetableItem: TimetableItemType = {...props};
    // timetableItems.remove(timetableItem);

    timetableItems.removeItem({
        className: props.className!,
        lecturerName: props.lecturerName!,
        roomNumber: props.roomNumber!,
        startTime: props.startTime!,
        classDuration: props.classDuration!,
        dayOfWeek: props.dayOfWeek!,
        uuid: props.uuid!
    });
};

</script>

<template>
  <div
    id="timetableitem"
    class="border bg-gradient-to-t from-gray-100 to-white rounded-md m-3 p-1 shadow-xl flex flex-col" 
    @click="toggleDrawer"
    >
    <div class="flex justify-between">
        <h1>
            <em><strong>{{props.className}}</strong></em>
        </h1>
        <span><p><strong>{{props.startTime}}</strong></p></span>
    </div>
    <div class="flex justify-between">
        <h2>{{props.lecturerName}} | Room: {{props.roomNumber}}</h2>
        <span><p><strong>{{props.classDuration}}</strong></p></span>
    </div>
    <div id="drawer" v-if="drawerVisible">
        <button class="border bg-gradient-to-t from-red-300 from-10% to-red-50 w-[100%] rounded-md mt-1" @click="removeItemHandler">Delete</button>
    </div>
  </div>
</template>

<style scoped></style>
