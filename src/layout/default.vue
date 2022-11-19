<template>
    <div class="default">
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang='scss' scoped>
    .container {
        width: 1280px;
        display: flex;
        flex-wrap: wrap;
    }
</style>