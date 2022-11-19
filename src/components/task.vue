<template>
    <div class="card">
        <div class="card__title">
            <h4>Задача #{{ num + 1 }}</h4>
            <div @click="deleteTask" class="card__title__delete">❌</div>
        </div>
        
        <hr>
        <p v-if="!updateShow" @click="updateShow = true" class="card__description">
            {{ text }}
        </p>
        <div v-else>
            <input ref="updateInput" @keyup.enter="updateTask" v-model="updateValue" type="text">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useStore } from '../store/store';
    import { onClickOutside } from '@vueuse/core'

    const { id } = defineProps({
        text: String,
        id: String | Number,
        num: Number
    })

    const store = useStore()
    const updateValue = ref('')
    const updateShow = ref(false)
    const updateInput = ref(null)

    const deleteTask = () => store.deleteTask(id)
    const updateTask = () => {
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
    }
</style>