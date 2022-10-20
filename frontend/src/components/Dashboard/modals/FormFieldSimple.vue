<!-- eslint-disable vue/no-mutating-props -->
<template>
  <fieldset class="mb-4">
    <label class="text-center mr-2 font-semibold">{{ props.labelName }}</label>
    <input
      type="text"
      class="p-2"
      :value="modelValue"
      @input="(event: any) => $emit('update:modelValue', event.target.value)"
    />
  </fieldset>
</template>

<script setup lang="ts">
  import { reactive, onMounted, onUpdated } from 'vue'
  defineEmits(['update:modelValue'])
  const props = defineProps<{
    labelName: string
    modelValue: string
  }>()
</script>
