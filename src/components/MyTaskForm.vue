<template>
  <div class="flex flex-col gap-4">
    <MyInput label="Title" v-model="title"/>
    <MyInput label="Description" v-model="description"/>
    <MyButton @click="onAddTask" class="min-w-[100px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 px-4 py-2">
      Add
    </MyButton>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';

const title = ref('');
const description = ref('');

const emit = defineEmits(['onAddTask']);

const onAddTask = () => {
  if (title.value && description.value) {
    emit('onAddTask', {title: title.value, description: description.value});

    title.value = '';
    description.value = '';
  }
};
</script>