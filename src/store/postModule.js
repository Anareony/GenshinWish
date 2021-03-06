export const postModule = {
    namespaced: true,
    state: () => ({
        posts: [
            {id: 1, title: '11 JS', body: '1Описание поста'},
            {id: 2, title: '3 JS 2', body: '2Описание поста 2'},
        ],
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержанию'}
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort( (post1, post2) =>  post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]) )
        },
        searchedPosts(state, getters) {
            return getters.sortedPosts.filter( post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        removePost(state, post) {
            state.posts = state.posts.filter(p => p.id !== post.id);
        },
    }
}