import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('store', () => {
    let tasks = ref([])

    function addTask(payload) {
        tasks.value.push({
            id: Math.random().toString(16).slice(2),
            text: payload
        })
    }

    function deleteTask(payload) {
        tasks.value = tasks.value.filter(item => item.id != payload)
    }

    function updateTask(payload) {
        tasks.value.forEach(item => item.id == payload.id ? item.text = payload.text : null)    
    }

    return {
        tasks,
        addTask,
        updateTask,
        deleteTask
    }
})