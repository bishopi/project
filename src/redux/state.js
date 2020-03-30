let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Yoe', likesCount: 12},
                {id: 2, message: 'Yoa', likesCount: 13},
                {id: 3, message: 'Yos', likesCount: 13},
                {id: 4, message: 'Yoa', likesCount: 13},
                {id: 5, message: 'Yonica', likesCount: 13},
                {id: 6, message: 'Yof', likesCount: 13}
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
        },
        sidebar: [
            {name: 'Vika'},
            {name: 'Sveta'},
            {name: 'Lena'}


        ]

    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState (){
    return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },




    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 7,
                message: this._state.profile.newPostText,
                likesCount: 0
            };
            this._state.profile.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 10,
                message: this._state.messages.newMessageText
            };
            this._state.messages.messages.push(newMessage);
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-MESSAGE-TEXT'){
            this._state.messages.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }


};


export let addPostActionCreator = () =>{
    return {type: 'ADD-POST'}
}
export let updateNewPostTextActionCreator = (text) =>{
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text }
}

export default store;