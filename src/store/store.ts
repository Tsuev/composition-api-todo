import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Task } from '../types/global'

export const useStore = defineStore('store', () => {
    let tasks = ref<Task[]>([])

    function addTask(payload: string) {
        tasks.value.push({
            id: Math.random().toString(16).slice(2),
            text: payload
        })
    }

    function deleteTask(payload: string): void {
        tasks.value = tasks.value.filter(item => item.id != payload)
    }

    function updateTask(payload: Task): void {
        tasks.value.forEach(item => item.id == payload.id ? item.text = payload.text : null)    
    }

    return {
        tasks,
        addTask,
        updateTask,
        deleteTask
    }
})