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

<script setup>
import { ref } from 'vue';
import CustomInput from './custom-input.vue';
import { useStore } from '../store/store';

const store = useStore()
const taskText = ref('')

const addTask = () => {
  if (taskText.value) {
    store.addTask(taskText.value)
    taskText.value = '' 
  }
}
</script>

<style lang='scss'>
    
</style>