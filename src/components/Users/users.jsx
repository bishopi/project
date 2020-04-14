import React from "react";
import s from "./users.module.css"
import userPhoto from '../../imges/userPxoto.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= props.paginationSize; i++)
        page.push(i);

    return <div>
        <div>
            {page.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
            <button onClick={() => {
                props.paginationPush(pagesCount)
            }}>More Users
            </button>
        </div>

        {
            props.users.map(u => <div key={u.id}>
    <span>
     <div>
         <NavLink to={'/profile/' + u.id}>
             <img src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.userPhoto}/></NavLink>

     </div>
     <div>{u.followed
         ? <button onClick={() => {
             props.unfollow(u.id)
         }}>Follow</button>
         : <button onClick={() => {
             props.follow(u.id)
         }}>unFollow</button>}

     </div>
    </span>
                <span>
     <span>
      <div>{u.name}</div>
      <div>{u.status}</div>
         </span>
     <span>
      <div>{"u.location.city"}</div>
      <div>{"u.location.country"}</div>
     </span>
    </span>
            </div>)
        }
    </div>

}


export default Users;