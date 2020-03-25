import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Posts from "./MyPosts/Posts/Posts";
const Profile = () => {
    return <div className={s.profile}>
        <div className={s.img}>
            <img src="http://greenbelarus.info/files/b87a1631.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>

    </div>
};
export default Profile;