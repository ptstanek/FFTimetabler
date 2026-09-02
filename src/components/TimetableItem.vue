<script setup lang="ts">
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
    dayOfWeek: Number
});

</script>

<template>
  <div
    id="timetableitem"
    class="border bg-gradient-to-t from-gray-100 to-white rounded-md m-3 p-1 shadow-xl flex flex-col" >
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
  </div>
</template>

<style scoped></style>
