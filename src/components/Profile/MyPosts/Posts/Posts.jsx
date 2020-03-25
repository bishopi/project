import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div className={s.item}>
            <img src="http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png" alt=""/>
            {props.message}
            <div>
                <span>{props.likeCounts}   like</span>
            </div>
        </div>


    )
};
export default Posts;