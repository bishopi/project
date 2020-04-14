const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_PAGINATION_SIZE = 'SET_PAGINATION_SIZE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    paginationSize: 10,
    isFetching: false

};


const userReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })


            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS:
            return {...state, totalUsersCount: action.totalCount};
        case SET_PAGINATION_SIZE:
            return {...state, paginationSize: action.newPagination};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default :
            return state;

    }
};

export let follow = (userId) => (
    {type: FOLLOW, userId}
);
export let unfollow = (userId) => (
    {type: UNFOLLOW, userId}
);
export let setUsers = (users) => (
    {type: SET_USERS, users}
);
export let setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export let setTotalUsersCount = (totalCount) =>
    ({type: SET_TOTAL_USERS, totalCount});
export let setPaginationSize = (newPagination) =>
    ({type: SET_PAGINATION_SIZE, newPagination});
export let toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});

export default userReducer;