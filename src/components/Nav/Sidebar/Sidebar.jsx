import React from "react";
import s from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    let sidebarElement = props.sidebar.map(elem => <Friends name={elem.name}/>);
    return <div className={s.sidebar}>
        <div>Friends</div>
        <div className={s.friends}>{sidebarElement}</div>

    </div>






};






export default Sidebar;