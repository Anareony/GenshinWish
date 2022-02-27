<template>
    <button class="button"  >
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
    color: white;
    border: none;
    opacity: 0.75;
    cursor: pointer;
    font-size: 18px;
}

.button:hover {
    opacity: 1;
}

</style>