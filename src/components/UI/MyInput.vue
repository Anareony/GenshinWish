<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue:[ String, Number]
    },
    methods:{
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

.input {
    width: 100%;
    border: 1px solid grey;
    border-radius: 25px;
    background-color: rgb(20, 20, 20);
    color: inherit;
    padding: 15px;
    margin-top: 15px;
}
</style>