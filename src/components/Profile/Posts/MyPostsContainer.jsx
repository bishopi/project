import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";






let mapStateToProps = (state) => {
    return{posts: state.profile.posts,
        newPostText: state.profile.newPostText}
}
let mapDispatchToProps = (dispatch) => {
    return{
        addNewPost:() => {dispatch(addPostActionCreator() );},
        updateNewPostText:(text) =>{dispatch(updateNewPostTextActionCreator(text));}
    }
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts);


export default MyPostsContainer;