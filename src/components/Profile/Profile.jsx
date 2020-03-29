import React from "react";
import s from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

    return (<div>
        <ProfileInfo />
        <MyPosts posts={props.posts.posts} updateNewPostText={props.updateNewPostText}
                 newPostText={props.posts.newPostText} addNPost={props.addNPost}/>

        </div>
    )

};
export default Profile;