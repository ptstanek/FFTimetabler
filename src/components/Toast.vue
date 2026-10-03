<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps({ text: String, toastTrigger: Boolean });
const visible = ref(true);
let timeout: ReturnType<typeof setTimeout>;

function trigger () {
  clearTimeout(timeout);

  visible.value = true;

  timeout = setTimeout(() => {
    visible.value = false;
  }, 1500);
}

watch(
  () => props.toastTrigger,
  () => {
    trigger();
  }
);

onBeforeUnmount(() => {
  if (timeout) clearTimeout(timeout);
});

</script>

<template>
    <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity duration-1000"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <p v-if="visible"
            class="absolute bottom-25 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-center border bg-white rounded-lg p-2 shadow-2xl">
            {{ props.text }}
        </p>
    </Transition>
</template>

<style scoped></style>