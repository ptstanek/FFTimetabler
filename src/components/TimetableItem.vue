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
    class="border bg-white rounded-md m-3 p-1 shadow-sm flex flex-col " >
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
