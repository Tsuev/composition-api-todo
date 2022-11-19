<template>
  <Header />
  <default>
    <Task 
      v-for="({ text, id }, index) in tasks"
      :text="text"
      :num="index"
      :key="id"
      :id="id"
    />
  </default>
</template>

<script setup>
  import Default from './layout/default.vue'
  import Task from './components/task.vue'
  import Header from './components/header.vue';
  import { useStore } from './store/store';
  import { computed } from 'vue';

  const store = useStore()
  const tasks = computed(() => store.tasks)
  
</script>

<style scoped>

</style>
