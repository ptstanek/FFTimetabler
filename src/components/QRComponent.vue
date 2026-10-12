<script setup lang="ts">

import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';

const canvasVisible = ref(false);

const generateQRCodeHandler = () => {
    canvasVisible.value = true;
    QRCode.toCanvas(document.getElementById('qrcanvas'), id.value, {scale: 8});
};

const id = ref("");

</script>

<template>
    <div class="m-3 border-1 rounded-lg p-3 bg-white shadow-2xl flex flex-col">
        <canvas id="qrcanvas" :class="{'visible: hidden': !canvasVisible}" class="border-1 m-3 rounded-lg shadow-2xl self-center"></canvas>
        <label for="input"><strong>Student ID</strong></label>
        <input type="text" class="border py-2 mb-2" v-model="id"/>
        <button @click="generateQRCodeHandler" class="border-1 p-2 bg-blue-200">Generate QR</button>
    </div>
</template>

<style scoped></style>