import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";
const Nav = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div >
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/games' activeClassName={s.active}>Games</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.sidebar}>
            {<SidebarContainer store={props.store} />}
        </div>
    </nav>
};
export default Nav;






