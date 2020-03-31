import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



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
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = dialogsReducer(this._state.messages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }


};



export default store;