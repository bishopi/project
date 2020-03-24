import React from "react";
import s from './Profile.module.css';
const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img src="http://greenbelarus.info/files/b87a1631.jpg" alt=""/>
        </div>
        <div >
            ava + description
        </div>
        <div >
            My posts
        </div>
        <div >
            New Post
        </div>
        <div className={s.item}>
            post 1
        </div>
        <div className={s.item}>
            post 2
        </div>
    </div>
};
export default Profile;