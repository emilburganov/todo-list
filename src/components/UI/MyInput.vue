<template>
  <div>
    <label for="input" class="block mb-2 font-medium text-gray-900">{{ label }}</label>
    <input :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           type="text"
           id="input"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
  </div>
</template>

<script setup>
defineProps(['modelValue', 'label']);
defineEmits(['update:modelValue']);
</script>