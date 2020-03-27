import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/Dialog";
import Message from "./Messages/Messages";


let dialogsData = [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Vika'},
    {id: 5, name: 'Veronica'},
    {id: 6, name: 'Roma'}
];
let messagesData = [
    {id: 1, message: 'Yoe'},
    {id: 2, message: 'Yoa'},
    {id: 3, message: 'Yos'},
    {id: 4, message: 'Yoa'},
    {id: 5, message: 'Yonica'},
    {id: 6, message: 'Yof'}
];

const Dialogs = (props) => {



    let dialogsElements = dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id}/>);
    let messageElements = messagesData.map(message => <Message message={message.message}/>);




    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
        </div>
    </div>
};

export default Dialogs;