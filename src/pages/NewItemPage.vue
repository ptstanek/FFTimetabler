<script setup lang="ts">
import { ref } from 'vue';
import { PlusIcon } from '@lucide/vue';
import { useTimetableItemStore } from '../stores/timetableItemStore';
import { DayOfWeek, TimetableItemType } from '../Types';
import Toast from '../components/Toast.vue';

const timetableItems = useTimetableItemStore();

const className = ref('');
const lecturerName = ref('');
const startTime = ref('');
const duration = ref('');
const _dayOfWeek = ref(-1);
const roomNumber = ref('');

const validatorMessage = ref<string>('');

const toastTrigger = ref<boolean>(false);
const toastMessage = ref<string>();

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

    console.log(`_dayOfWeek: ${_dayOfWeek.value}\n`);

    // validation:
    if (
        className.value.trim() === '' ||
        lecturerName.value.trim() === '' ||
        roomNumber.value.trim() === '' ||
        startTime.value.trim() === '' ||
        duration.value.trim() === '' ||
        _dayOfWeek.value === -1
    ) {
        validatorMessage.value = 'One or more required fields are missing.';
        return;
    }

    const item: TimetableItemType = {
        className: className.value,
        lecturerName: lecturerName.value,
        startTime: startTime.value,
        classDuration: duration.value,
        roomNumber: roomNumber.value,
        dayOfWeek: _dayOfWeek.value // TODO: fix this later. this is improper naming and will cause confusion at some stage.
    }

    timetableItems.add(item);
    toastMessage.value = "Timetable item added.";
    toastTrigger.value = !toastTrigger.value;
};

</script>

<template>
    <Toast :text="toastMessage" :toast-trigger="toastTrigger" />
    <div class="mx-3 overflow-y-auto pb-[70px]">
        <div class="m-2 flex flex-row justify-center">
            <PlusIcon />
            <h1 class="text-xl"><em>New Item</em></h1>
        </div>
        <h2 class="text-red-500 shadow-2xl-black" v-if="validatorMessage != ''"><strong>{{ validatorMessage }}</strong>
        </h2>
        <div class="m-3 flex flex-col">
            <form @submit.prevent="createItem">
                <p>Class Name</p>
                <input type="text" v-model="className"
                    class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Lecturer</p>
                <input type="text" v-model="lecturerName"
                    class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Room Number</p>
                <input type="text" v-model="roomNumber"
                    class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Day of Week</p>
                <select v-model.number="_dayOfWeek" name="dayOfWeek" class="border-2 rounded-md">
                    <option disabled value="-1">Select a day</option>
                    <option v-for="(day, index) in DayOfWeek" :key="day" :value="index + 1">
                        {{ day }}
                    </option>
                </select>
                <p class="pt-3">Start Time (HH:MM)</p>
                <input type="text" v-model="startTime"
                    class="bg-white border-2 rounded-lg w-[30%] shadow-xl my-2 h-10" />
                <p>Duration (e.g 1hr30m)</p>
                <input type="text" v-model="duration"
                    class="bg-white border-2 rounded-lg w-[30%] shadow-xl my-2 h-10" /><br>
                <button type="submit" class="border-2 py-3 my-2 w-full bg-cornflower"><em>Create</em></button>
            </form>
        </div>
    </div>
</template>

<style scoped></style>