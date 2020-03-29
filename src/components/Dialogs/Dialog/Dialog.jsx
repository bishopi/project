import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

    return <div className={s.dialog}>
        <img src="http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png" alt=""/>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
};
export default DialogItem;