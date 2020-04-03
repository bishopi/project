import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import Message from "./Messages/Messages";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return{messages: state.messages}
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage:() => {dispatch(addMessageActionCreator() );},
        onMessageChange:(textMessage) =>{dispatch(updateMessageTextActionCreator(textMessage));}
    }
}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;