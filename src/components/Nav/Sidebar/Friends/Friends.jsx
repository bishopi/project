import React from "react";
import s from "./Friends.module.css";
 const Friends = (props) => {
   return <div className={s.friendsModule}>
       <img src="http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png" alt=""/>
       <div>{props.name}</div>
   </div>  
 };





export default Friends;