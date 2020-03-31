    const ADD_MESSAGE = 'ADD-MESSAGE';
    const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
 const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {

                id: 10,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }};


    export let addMessageActionCreator = () => (
        {type: ADD_MESSAGE}
    );
    export let updateMessageTextActionCreator = (textMessage) => (
        {type: UPDATE_MESSAGE_TEXT, newText: textMessage}
    );

export default dialogsReducer;