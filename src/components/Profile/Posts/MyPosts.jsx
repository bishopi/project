import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";






const MyPosts = (props) => {



    let AddPost = () => {

        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));

    };
    let newPostElement = React.createRef();
    let onPostChange = () => {


        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    let postsElements = props.state.profile.posts.map(elem => <Posts message = {elem.message} likeCounts = {elem.likesCount}/>);
    return <div className={s.postBlock}>
        <div className={s.myPosts}>
            <h3>My posts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.state.profile.newPostText}/>
        </div>
        <div className={s.btnAddPost}>
            <button onClick={AddPost}>Add post</button>
        </div>
        </div>
        <div className={s.othesPosts}>
        {postsElements}
        </div>
    </div>
};
export default MyPosts;