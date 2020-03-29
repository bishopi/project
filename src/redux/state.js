let state = {
    profile: {
        posts: [
            {id: 1, message: 'Yoe', likesCount: 12},
            {id: 2, message: 'Yoa', likesCount: 13},
            {id: 3, message: 'Yos', likesCount: 13},
            {id: 4, message: 'Yoa', likesCount: 13},
            {id: 5, message: 'Yonica', likesCount: 13},
            {id: 6, message: 'Yof', likesCount: 13}
        ]
    },
    messages: {
        dialogs: [
            {id: 1, name: 'Ilya'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Lena'},
            {id: 4, name: 'Vika'},
            {id: 5, name: 'Veronica'},
            {id: 6, name: 'Roma'}
        ],
        messages: [
            {id: 1, message: 'Yoe'},
            {id: 2, message: 'Yoa'},
            {id: 3, message: 'Yos'},
            {id: 4, message: 'Yoa'},
            {id: 5, message: 'Yonica'},
            {id: 6, message: 'Yof'}
        ]
    },
    sidebar: [
        {name: 'Vika'},
        {name: 'Sveta'},
        {name: 'Lena'}


    ]

};
export let addNewPost = (postMessage) => {


    let newPost = {
        id:7,
        message: postMessage,
        likesCount: 0
    };
    state.profile.posts.push(newPost);
};

export default state;