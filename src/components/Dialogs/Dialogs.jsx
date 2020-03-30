import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import Message from "./Messages/Messages";




const Dialogs = (props) => {



    let newMessageElement = React.createRef();
    let AddMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'} );


    };


    let dialogsElements = props.state.messages.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>);
    let messageElements = props.state.messages.messages.map(message => <Message message={message.message}/>);
    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-MESSAGE-TEXT', newText: textMessage});

    };



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