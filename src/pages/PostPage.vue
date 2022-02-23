<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Поиск..."
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пост
            </my-button>
            <my-select
                v-model="selectedSort"
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
            posts: [
                {id: 1, title: '11 JS', body: '1Описание поста'},
                {id: 2, title: '3 JS 2', body: '2Описание поста 2'},
                {id: 3, title: '4 JS ', body: '3Описание поста 3'},
                {id: 4, title: '7 JS', body: '1Описание поста'},
                {id: 5, title: '9 JS 2', body: '2Описание поста 2'},
                {id: 6, title: '10 JS ', body: '3Описание поста 3'},
            ],
            dialogVisible: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'}
            ]
            
        }
    },
    methods: {
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
        sortedPosts() {
            return [...this.posts].sort( (post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]) )
        },
        searchedPosts() {
            return this.sortedPosts.filter( post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {

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