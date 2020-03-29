import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import Message from "./Messages/Messages";




const Dialogs = (props) => {



    let newMessageElement = React.createRef();
    let AddMessage = () => {
        let textMessage = newMessageElement.current.value
    };


    let dialogsElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>);
    let messageElements = props.state.messages.map(message => <Message message={message.message}/>);




    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>

        <div className={s.messages}>
            {messageElements}
            <div>
                <textarea name="" id="" cols="80" rows="5" ref={newMessageElement}></textarea>
                <button onClick={AddMessage}>Send</button>
            </div>
        </div>

    </div>
};

export default Dialogs;