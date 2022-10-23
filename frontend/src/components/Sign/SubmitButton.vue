<template>
  <fieldset class="flex w-full justify-end">
    <div class="w-4/12 mt-2">
      <button
        type="submit"
        class="w-full h-12 text-xl font-bold border-2 border-main-dark rounded-md text-main-dark"
      >
        {{ props.value }}
      </button>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
  const props = defineProps<{ value: string }>()
</script>
