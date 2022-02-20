<template>
    <button class="button" >
    <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
}
</script>

<style scoped>
.button {
    padding: 15px;
    background: none;
    color: grey;
    border: 1px solid grey;
}
</style>