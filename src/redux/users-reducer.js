const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
          {id: 1,  followed: false, photoUrl: 'http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png',
              name: 'Ilya', status: 'ABCD', location: {city: 'Minsk', country: 'Belarus'}},
          {id: 2,  followed: false, photoUrl: 'http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png',
              name: 'Sveta', status: 'ABCD', location: {city: 'Minsk', country: 'Belarus'}},
          {id: 3,  followed: false, photoUrl: 'http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png',
              name: 'Lena', status: 'ABCD', location: {city: 'Minsk', country: 'Belarus'}},
          {id: 4,  followed: true, photoUrl: 'http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png',
              name: 'Vika', status: 'ABCD', location: {city: 'Minsk', country: 'Belarus'}},
          {id: 5,  followed: false, photoUrl: 'http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png',
              name: 'Veronica', status: 'ABCD', location: {city: 'Minsk', country: 'Belarus'}},
          {id: 6,  followed: false, photoUrl: 'http://crystall-cleaning.by/wp-content/uploads/2018/07/avatar.png',
              name: 'Roma', status: 'ABCD', location: {city: 'Minsk', country: 'Belarus'}}
    ],


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
            return {...state, users: [...state.users, ...action.users]};
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


export default userReducer;