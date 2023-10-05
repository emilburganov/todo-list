<template>
  <div>
    <input :checked="checked" type="checkbox"
           class="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500">
    <label class="text-sm font-medium text-gray-900"></label>
  </div>
</template>

<script setup>
defineProps(['checked']);
</script>