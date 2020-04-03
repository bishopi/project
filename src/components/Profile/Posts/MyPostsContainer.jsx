import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";






const MyPostsContainer = (props) => {

let state = props.store.getState();

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };


    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };


    return  <MyPosts updateNewPostText={onPostChange} addNewPost={AddPost} posts={state.profile.posts}/>
};
export default MyPostsContainer;