import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";






const MyPosts = (props) => {
    let postsElements = props.posts.map(elem => <Posts message = {elem.message} likeCounts = {elem.likesCount}/>)
    return <div className={s.postBlock}>
        <div className={s.myPosts}>
            <h3>My posts</h3>
        <div>
            <textarea name="myPosts" cols="123" rows="7"></textarea>
        </div>
        <div className={s.btnAddPost}>
            <button>Add post</button>
        </div>
        </div>
        <div className={s.othesPosts}>
        {postsElements}
        </div>
    </div>
};
export default MyPosts;