const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {

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

}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 10, message: state.newMessageText}]

            };

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
};


export let addMessageActionCreator = () => (
    {type: ADD_MESSAGE}
);
export let updateMessageTextActionCreator = (textMessage) => (
    {type: UPDATE_MESSAGE_TEXT, newText: textMessage}
);

export default dialogsReducer;