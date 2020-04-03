/*
import React from "react";
import s from "./Sidebar.module.css";
import Friends from "./Friends/Friends";
import sidebarReducer from "../../../redux/sidebar-reducer";

const Sidebar = (props) => {


let state = props.store.getState();
    console.log(state);
    let sidebarElement = state.sidebar.map(elem => <Friends name={elem.name}/>);
    return <div className={s.sidebar}>
        <div>Friends</div>
        <div className={s.friends}>{sidebarElement}</div>

    </div>

};

export default Sidebar;*/
