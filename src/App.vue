<template>
  <Header />
  <home>
    <TransitionGroup name="task">
      <Tasks v-for="({ text, id }, index) in tasks" :text="text" :num="index" :key="id" :id="id" />
    </TransitionGroup>
  </home>
</template>

<script setup lang="ts">
import Home from './views/home.vue'
import Tasks from './components/task.vue'
import Header from './components/header.vue';
import { useStore } from './store/store';
import { computed } from 'vue';
import { Task } from './types/global'

const store = useStore()
const tasks = computed<Task[]>(() => store.tasks)

</script>

<style scoped>
.task-enter-active,
.task-leave-active {
  transition: all 0.5s ease;
}

.task-enter-from {
  opacity: 0;
  transform: scale(0);
}

.task-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
