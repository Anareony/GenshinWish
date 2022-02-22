<template>
    <h3>Создание поста</h3>
    <form @submit.prevent>
        <my-input 
            v-model="post.title"
            class="input" type="text" 
            placeholder="Название"
        />
        <my-input
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Описание"
        />
        <my-button
            @click="createPost"
            style="align-self: flex-end; margin-top: 15px"
        >
            Создать
        </my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style>

</style>