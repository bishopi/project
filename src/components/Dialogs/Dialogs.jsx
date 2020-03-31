import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import Message from "./Messages/Messages";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {



    let newMessageElement = React.createRef();
    let AddMessage = () => {

        props.dispatch(addMessageActionCreator() );


    };


    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(textMessage));

    };

    let dialogsElements = props.state.messages.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>);
    let messageElements = props.state.messages.messages.map(message => <Message message={message.message}/>);


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>

        <div className={s.messages}>
            {messageElements}
            <div>
                <textarea onChange={onMessageChange} value={props.state.messages.newMessageText} ref={newMessageElement}></textarea>
                <button onClick={AddMessage}>Send</button>
            </div>
        </div>

    </div>
};

export default Dialogs;