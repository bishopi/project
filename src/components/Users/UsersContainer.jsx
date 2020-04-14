import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPaginationSize,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from './users'
import Preloader from "../common/Preloader/Preloader";


class usersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);

            })
    };
    paginationPush = (pagesCount) => {
        if (pagesCount >= this.props.paginationSize) {
            let newPagination = this.props.paginationSize + 10;
            return (this.props.setPaginationSize(newPagination))
        }
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   unfollow={this.props.unfollow} follow={this.props.follow}
                   paginationSize={this.props.paginationSize} paginationPush={this.paginationPush}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        paginationSize: state.usersPage.paginationSize,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setPaginationSize, toggleIsFetching
    }
)(usersContainer);