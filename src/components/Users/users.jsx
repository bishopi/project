import React from "react";
import s from "./users.module.css"
import * as axios from 'axios';
import userPhoto from '../../imges/userPxoto.png'


class Users extends React.Component {


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
        })
    }
  onPageChanged = (pageNumber) => {{this.props.setCurrentPage(pageNumber)}};
    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize) ;
        let page = [];
        for (let i = 1; i <= pagesCount; i++)
            page.push(i);

        return <div>
            <div>
                {page.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                    onClick={(e) =>{this.onPageChanged(p)} }>{p}</span>
                })}
            </div>

            {
                this.props.users.map(u => <div key={u.id}>
    <span>
     <div>
      <img src={u.photos.small != null ? u.photoUrl.small : userPhoto} className={s.userPhoto}/>
     </div>
     <div>{u.followed
         ? <button onClick={() => {
             this.props.unfollow(u.id)
         }}>Follow</button>
         : <button onClick={() => {
             this.props.follow(u.id)
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
}


export default Users;