import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";






const MyPosts = (props) => {


    let onAddPost = () => {
        props.addNewPost();
    };

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let postsElements = props.posts.map(elem => <Posts message = {elem.message} likeCounts = {elem.likesCount}/>);
    return <div className={s.postBlock}>
        <div className={s.myPosts}>
            <h3>My posts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div className={s.btnAddPost}>
            <button onClick={onAddPost}>Add post</button>
        </div>
        </div>
        <div className={s.othesPosts}>
        {postsElements}
        </div>
    </div>
};
export default MyPosts;