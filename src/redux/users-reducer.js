const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1
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
        default :
            return state;

    }
};

export let followAC = (userId) => (
    {type: FOLLOW, userId}
);
export let unfollowAC = (userId) => (
    {type: UNFOLLOW, userId}
);
export let setUsersAC = (users) => (
    {type: SET_USERS, users}
);
export let setCurrentPageAC = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});


export default userReducer;