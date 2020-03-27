import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";



let postData = [
    {id: 1, message: 'Yoe', likesCount: 12},
    {id: 2, message: 'Yoa', likesCount: 13},
    {id: 3, message: 'Yos', likesCount: 13},
    {id: 4, message: 'Yoa', likesCount: 13},
    {id: 5, message: 'Yonica', likesCount: 13},
    {id: 6, message: 'Yof', likesCount: 13}
];

let postsElements = postData.map(elem => <Posts message = {elem.message} likeCounts = {elem.likesCount}/>)
const MyPosts = () => {
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