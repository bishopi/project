import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return <div className={s.MyPosts}>
        <div>
            My posts
        </div>
        <div>
            New Post
        </div>
        <Posts message = 'Hi' likeCounts = '15'/>
        <Posts message = 'Bue' likeCounts = '20'/>
    </div>
};
export default MyPosts;