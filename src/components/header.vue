<template>
    <div class="header">
      <div>
        <CustomInput 
          v-model="taskText"
          label="Задача"
          @add-task="addTask"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from './custom-input.vue';
import { useStore } from '../store/store';

const store = useStore()
const taskText = ref<string>('')

const addTask = () => {
  if (taskText.value) {
    store.addTask(taskText.value)
    taskText.value = '' 
  }
}
</script>

<style lang='scss'>
    
</style>