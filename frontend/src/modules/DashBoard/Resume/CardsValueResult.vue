<template>
  <div
    class="w-[80%] m-auto flex text-slate-50 items-center border rounded-md p-4 mb-4"
  >
    <div class="flex-1 text-right font-semibold text-xl">{{ props.date }}</div>
    <div class="flex-1 text-right mr-2">{{ props.value }}</div>
    <div class="flex-1 font-bold text-xl">R$</div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ value: string; date: string }>()
  console.log()
</script>
