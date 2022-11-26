<template>
    <div class="home">
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang='scss' scoped>
.container {
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
}
</style>