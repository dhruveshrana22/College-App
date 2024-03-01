// actionTypes.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


// actions.js

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const signupSuccess = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user,
});

export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
});


// authReducer.js

const initialState = {
    users: [], // Initialize with an empty array or fetch from somewhere
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload],
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload],
                error: null,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
