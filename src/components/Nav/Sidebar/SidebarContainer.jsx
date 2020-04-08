import React from "react";
import s from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

import {sidebarReducer} from "../../../redux/sidebar-reducer";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";



let mapStateToProps = (state) => {
    return{sidebar: state.sidebar}
};


const SidebarContainer = connect (mapStateToProps) (Sidebar);

export default SidebarContainer;
