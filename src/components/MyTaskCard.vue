<template>
  <div class="flex gap-x-4">
    <MyCheckbox :checked="model.status" @click="$event.target.nodeName === 'INPUT' ? model.status = !model.status : null"/>
    <div class="truncate min-w-0">
      <p :class="{ 'line-through text-green-600': model.status }" class="truncate font-medium leading-7 text-gray-900">
        {{ model.title }}
      </p>
      <p :class="{ 'line-through text-green-500': model.status }" class="truncate mt-1 text-sm leading-5 text-gray-600">
        {{ model.description }}
      </p>
    </div>
    <div class="flex flex-col ml-auto">
      <MyButton class="ml-auto bg-red-700 hover:bg-red-800 focus:ring-red-300 px-2 py-2">
        <TrashIcon @click="emitOnRemove" class="h-3 w-3"/>
      </MyButton>
      <p class="mt-1 text-sm leading-5 text-gray-600 whitespace-nowrap">
        <time>{{ model.date }}</time>
      </p>
    </div>
  </div>
</template>

<script setup>
import MyCheckbox from './UI/MyCheckbox.vue';
import {TrashIcon} from '@heroicons/vue/24/solid/index.js';
import {defineEmits} from 'vue';
import MyButton from './UI/MyButton.vue';

defineProps(['model']);

const emit = defineEmits(['onRemove']);

const emitOnRemove = () => {
  emit('onRemove');
};
</script>