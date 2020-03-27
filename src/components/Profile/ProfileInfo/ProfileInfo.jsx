import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div className={s.cover}>
                <img src="http://greenbelarus.info/files/b87a1631.jpg" alt=""/>
            </div>
            <div className={s.profileContent}>
                <div className={s.avatar}>
                    <img src="https://st.kp.yandex.net/images/actor_iphone/iphone360_2982053.jpg" alt=""/>
                </div>
                <div className={s.description}>Age</div>
            </div>

        </div>)
};

export default ProfileInfo;