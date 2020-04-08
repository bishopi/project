import React from "react";
import s from "./users.module.css"



const Users = (props) => {
 return <div>
  {
   props.users.map (u => <div key={u.id}>
    <span>
     <div>
      <img src={u.photoUrl} className={s.userPhoto}/>
     </div>
     <div>{u.followed
     ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button>
     : <button onClick={() => {props.follow(u.id)}}>unFollow</button>}

     </div>
    </span>
    <span>
     <span><div>{u.name}</div><div></div>{u.status}</span>
     <span><div>{u.location.city}</div><div>{u.location.country}</div></span>
    </span>
   </div>)
  }
 </div>

};


export default Users;