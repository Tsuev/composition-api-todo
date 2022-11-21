<template>
    <div class="card" draggable="true">
        <div class="card__title">
            <h4>Задача #{{ num + 1 }}</h4>
            <div @click="deleteTask" class="card__title__delete">❌</div>
        </div>
        
        <hr>
        <p v-if="!updateShow" @click="updateShow = true" class="card__description">
            {{ text }}
        </p>
        <div v-else>
            <input class="card__editor" ref="updateInput" @keyup.enter="updateTask" v-model="updateValue" type="text">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useStore } from '../store/store';
    import { onClickOutside } from '@vueuse/core'

    const { id, text } = defineProps<{
        text: string,
        id: string,
        num: number
    }>()

    const store = useStore()
    const updateValue = ref<string>(text)
    const updateShow = ref<boolean>(false)
    const updateInput = ref<null>(null)

    const deleteTask = (): void => store.deleteTask(id)
    const updateTask = (): void => {
        store.updateTask({ id, text: updateValue.value })
        updateShow.value = false
    }

    onClickOutside(updateInput, () => updateShow.value = false)
</script>

<style lang='scss'>
    .card {
        padding: 15px;
        background-color: rgb(0, 143, 143);
        color: white;
        text-align: left;
        min-width: 300px;
        border-radius: 10px;
        margin: 5px;
        box-shadow: 0px 3px 11px 0px rgba(42, 114, 170, 0.559);
        box-shadow: 0px 0px 50px 1px rgba(34, 60, 80, 0.50) inset;
        &__title {
            font-weight: bold;
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            &__delete {
                cursor: pointer;
            }
            h4 {
                margin: 0;
            }
            
        }
        &__description {
            font-size: 16px;
            margin: 0;
        }
        &__editor {
            background: transparent;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
            font-size: 16px;
            font-family: 'IBM Plex Sans', Inter, Avenir, Helvetica, Arial, sans-serif;
            padding: 0;
        }
    }
</style>