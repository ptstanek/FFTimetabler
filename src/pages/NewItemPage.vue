<script setup lang="ts">
import { ref } from 'vue';
import { PlusIcon } from '@lucide/vue';
import { useTimetableItemStore } from '../stores/timetableItemStore';
import { DayOfWeek, TimetableItemType } from '../Types';

const timetableItems = useTimetableItemStore();

const className = ref('');
const lecturerName = ref('');
const startTime = ref('');
const duration = ref('');
const _dayOfWeek = ref(0);
const roomNumber = ref('');

const validatorMessage = ref<string>('');

/*
    className: string;
    lecturerName: string;
    roomNumber: string;
    startTime: string;
    classDuration: string;
    dayOfWeek: number;
*/

const createItem = () => {
    // console.log("adding item");

    // validation:
    if(className.value !== '' || _dayOfWeek.value !== 0 || roomNumber.value !== '' || startTime.value !== '' || duration.value !== '') {
        // creating an item before flinging it in.
        const item: TimetableItemType = {
            className: className.value,
            lecturerName: lecturerName.value,
            startTime: startTime.value,
            classDuration: duration.value,
            roomNumber: roomNumber.value,
            dayOfWeek: _dayOfWeek.value // TODO: fix this later. this is improper naming and will cause confusion at some stage.
        }
        timetableItems.add(item);
    }
    else { // validation fail.
        validatorMessage.value = "One or more required fields are missing.";
    } 
    /*
    console.log(timetableItems);
    console.log(`${className.value} ${lecturerName.value} ${roomNumber.value} ${startTime.value} ${duration.value} ${dayOfWeek.value}`)

    timetableItems.add(
    {
            className: className.value,
            lecturerName: lecturerName.value,
            roomNumber: "bomboclat",
            startTime: startTime.value,
            classDuration: duration.value,
            dayOfWeek: dayOfWeek.value
    });
    */
};

</script>

<template>
    <div class="m-3">
        <div class="m-2 flex flex-row justify-center">
            <PlusIcon />
            <h1 class="text-xl"><em>New Item</em></h1>
        </div>
        <h2 class="text-red-500 shadow-2xl-black" v-if="validatorMessage != ''" ><strong>{{ validatorMessage }}</strong></h2>
        <div class="m-3 flex flex-col">
            <form @submit.prevent="createItem">
                <p>Class Name</p>
                <input type="text" v-model="className" class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Lecturer</p>
                <input type="text" v-model="lecturerName" class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Room Number</p>
                <input type="text" v-model="roomNumber" class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Day of Week <em>(1 = Monday)</em></p>
                <input type="number" v-model="_dayOfWeek" class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Start Time (HH:MM)</p>
                <input type="text" v-model="startTime" class="bg-white border-2 rounded-lg w-[30%] shadow-xl my-2 h-10" />
                <p>Duration (e.g 1hr30m)</p>
                <input type="text" v-model="duration" class="bg-white border-2 rounded-lg w-[30%] shadow-xl my-2 h-10" />
                <button type="submit" class="block border-2 py-3 my-2 bg-cornflower"><em>Create</em></button>
            </form>
        </div>
    </div>
</template>

<style scoped></style>