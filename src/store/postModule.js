export const postModule = {
    state: () => ({
        posts: [
            {id: 1, title: '11 JS', body: '1Описание поста'},
            {id: 2, title: '3 JS 2', body: '2Описание поста 2'},
            {id: 3, title: '4 JS ', body: '3Описание поста 3'},
            {id: 4, title: '7 JS', body: '1Описание поста'},
            {id: 5, title: '9 JS 2', body: '2Описание поста 2'},
            {id: 6, title: '10 JS ', body: '3Описание поста 3'},
        ],
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержанию'}
        ]
    }),
    // getters: {
    //     // sortedPosts(state) {
    //     //     return [state.posts].sort( (post1, post2) =>  post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]) )
    //     // },
    //     // searchedPosts(state, getters) {
    //     //     return getters.sortedPosts.filter( post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    //     // }
    // },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
    },
    actions: {

    }
}