<template>
  <main class="flex justify-center items-center mt-10 px-4">
    <div class="max-w-[600px] w-full">
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 flex-col">
        <h1 class="mb-4 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          TodoList
        </h1>
        <TaskForm @onAddTask="addTask"/>
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="task in taskList" :key="task.id" class="py-5">
            <TaskCard
                @onRemove="removeTask(task.id)"
                :model="task"
            />
          </li>
        </ul>
        <Button
            v-if="taskList.length"
            @click="removeAllTasks"
            class="min-w-[100px] ml-auto block mt-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 px-4 py-2"
        >
          Clear All
        </Button>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskCard from "./components/TaskCard.vue";
import Button from "./components/UI/Button.vue";

const getCurrentDate = () => {
  return new Date(Date.now()).toISOString().substring(0, 16).replace("T", " ");
};

const taskList =
    localStorage.getItem("taskList")
        ?
        ref(JSON.parse(localStorage.getItem("taskList")))
        :
        ref([{
          id: 0,
          title: "Create TodoList app",
          description: "And publish it on GitHub",
          date: getCurrentDate(),
          status: false,
        }]);

const addTask = ({ title, description }) => {
  taskList.value.push({ id: taskList.value.length + 1, title, description, date: getCurrentDate(), status: false });
};

const removeTask = id => {
  taskList.value = taskList.value.filter(task => task.id !== id);
};

const removeAllTasks = () => {
  taskList.value = [];
};

window.addEventListener("beforeunload", () => {
  localStorage.setItem("taskList", JSON.stringify(taskList.value));
});
</script>