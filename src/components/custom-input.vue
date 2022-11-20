<template>
    <input 
      type="input" 
      class="form__field" 
      placeholder="empty"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
      @keyup.enter="$emit('addTask')"
    />
    <label for="name" class="form__label">{{ label }}</label>
</template>

<script setup>
    defineProps({ label: String, modelValue: String })
    defineEmits(['update:modelValue', 'addTask'])
</script>

<style lang='scss'>
    $primary: #11998e;
    $secondary: #38ef7d;
    $white: #fff;
    $gray: #9b9b9b;
    .form__field {
    margin-right: 10px;
    font-family: inherit;
    width: 30%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    margin-bottom: 30px;
    
    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 35px;
    }
    }
    .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 16px;
    color: $gray;
    }
    .form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 16px;
        color: $primary;
        font-weight:700;    
    }
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary,$secondary);
    border-image-slice: 1;
    }
    .form__field{
    &:required,&:invalid { box-shadow:none; }
    }
</style>