<script setup lang="ts">
import { ref, reactive } from 'vue';
import { PlusIcon } from '@lucide/vue';
import { useTimetableItemStore } from '../stores/timetableItemStore';
import { DayOfWeek, TimetableItemType } from '../Types';
import Toast from '../components/Toast.vue';
import { v4 as uuidv4 } from 'uuid';

const timetableItems = useTimetableItemStore();

const formRefs = reactive({
    className: '',
    lecturerName: '',
    startTimeHours: '',
    startTimeMinutes: '',
    durationHours: '',
    durationMinutes: '',
    _dayOfWeek: -1,
    roomNumber: '',
});

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

    // console.log(`_dayOfWeek: ${_dayOfWeek.value}\n`);

    // validation:
    if (
        formRefs.className.trim() === '' ||
        formRefs.lecturerName.trim() === '' ||
        formRefs.roomNumber.trim() === '' ||
        formRefs.startTimeHours.trim() === '' ||
        formRefs.startTimeMinutes.trim() === '' ||
        formRefs.durationHours.trim() === '' ||
        formRefs.durationMinutes.trim() === '' ||
        formRefs._dayOfWeek === -1
    ) {
        validatorMessage.value = 'One or more required fields are missing.';
        toastMessage.value = "Can't create item - invalid fields";
        toastTrigger.value = !toastTrigger.value;
        return;
    }

    if(formRefs.startTimeHours.length === 1) { // prepand a zero if the hours field has one digit
        formRefs.startTimeHours = "0".concat(formRefs.startTimeHours);
    }

    const item: TimetableItemType = {
        className: formRefs.className,
        lecturerName: formRefs.lecturerName,
        startTime: formRefs.startTimeHours.concat(":", formRefs.startTimeMinutes),
        classDuration: formRefs.durationHours.concat("hr", formRefs.durationMinutes, "m"),
        roomNumber: formRefs.roomNumber,
        dayOfWeek: formRefs._dayOfWeek, // TODO: fix this later. this is improper naming and will cause confusion at some stage.
        uuid: uuidv4()
    }

    timetableItems.add(item);
    toastMessage.value = "Timetable item added.";
    toastTrigger.value = !toastTrigger.value;
};

</script>

<template>
    <Toast :text="toastMessage" :toast-trigger="toastTrigger" />
    <div class="mx-3 pb-[70px]">
        <div class="m-2 flex flex-row justify-center">
            <PlusIcon />
            <h1 class="text-xl"><em>New Item</em></h1>
        </div>
        <h2 class="text-red-500 shadow-2xl-black" v-if="validatorMessage != ''"><strong>{{ validatorMessage }}</strong>
        </h2>
        <div class="m-3 pb-10 flex flex-col">
            <form @submit.prevent="createItem">
                <p>Class Name</p>
                <input type="text" v-model="formRefs.className"
                    class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Lecturer</p>
                <input type="text" v-model="formRefs.lecturerName"
                    class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Room Number</p>
                <input type="text" v-model="formRefs.roomNumber"
                    class="bg-white border-2 rounded-lg w-full shadow-xl my-2 h-10" />
                <p>Day of Week</p>
                <select v-model.number="formRefs._dayOfWeek" name="dayOfWeek" class="border-2 rounded-md">
                    <option disabled value="-1">Select a day</option>
                    <option v-for="(day, index) in DayOfWeek" :key="day" :value="index + 1">
                        {{ day }}
                    </option>
                </select>
                <p class="pt-3">Start Time (HH:MM)</p>
                <div id="starttimebox" class="flex flex-row">
                    <input type="text" v-model="formRefs.startTimeHours"
                        class="bg-white border-2 rounded-lg w-[10%] shadow-xl my-2 h-10 mr-2" />
                        <input type="text" v-model="formRefs.startTimeMinutes"
                        class="bg-white border-2 rounded-lg w-[10%] shadow-xl my-2 h-10 mr-2" />
                </div>
                <p>Duration (e.g 1hr30m)</p>
                <div id="durationbox" class="flex flex-row">
                    <input type="text" v-model="formRefs.durationHours"
                        class="bg-white border-2 rounded-lg w-[10%] shadow-xl my-2 h-10 mr-2" /><br>
                    <input type="text" v-model="formRefs.durationMinutes"
                        class="bg-white border-2 rounded-lg w-[10%] shadow-xl my-2 h-10" /><br>
                </div>
                <button type="submit" class="border-2 py-3 my-2 w-full bg-cornflower"><em>Create</em></button>
            </form>
        </div>
    </div>
</template>

<style scoped></style>