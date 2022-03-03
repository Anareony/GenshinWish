<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск..."
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пост
            </my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list
            :posts="searchedPosts"
            @remove="removePost"
        />
    </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
    MySelect,
    MyInput
},
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setSelectedSort: 'post/setSelectedSort',
            setSearchQuery: 'post/setSearchQuery',
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        }
    },
    computed: {
        ...mapState({
        posts: state => state.post.posts,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            searchedPosts: 'post/searchedPosts',
        }),
    }
}
</script>

<style>

form {
    display: flex;
    flex-direction: column;
}

.app__btns{
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
</style>