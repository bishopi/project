    const ADD_POST = 'ADD-POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

    let initialState = {

            posts: [
                {id: 1, message: 'Yoe', likesCount: 12},
                {id: 2, message: 'Yoa', likesCount: 13},
                {id: 3, message: 'Yos', likesCount: 13},
                {id: 4, message: 'Yoa', likesCount: 13},
                {id: 5, message: 'Yonica', likesCount: 13},
                {id: 6, message: 'Yof', likesCount: 13}
            ],
            newPostText: ''

    }


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
        let newPost = {
            id: 7,
            message: state.newPostText,
            likesCount: 0
        };
       state.posts.push(newPost);
       return state;

        case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;
        default :
            return state;

}};

    export let addPostActionCreator = () => (
        {type: ADD_POST}
    );

    export let updateNewPostTextActionCreator = (text) => (
        {type: UPDATE_NEW_POST_TEXT, newText: text}
    );

export default profileReducer;