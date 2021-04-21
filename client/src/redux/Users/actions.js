export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const USER_LOADED = 'USER_LOADED';
export const userLoaded = (auth) => ({
    type: USER_LOADED,
    payload: auth,
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = (auth) => ({
    type: CREATE_USER,
    payload: auth,
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = (auth) => ({
    type: AUTH_ERROR,
    payload: auth,

});
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (auth) => ({
    type: LOGIN_SUCCESS,
    payload: auth,
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = () => LOGIN_FAIL

export const LOGOUT = 'LOGOUT';
export const logoutSuccess = () => ({
    type: LOGOUT
})


export const ACCOUNT_DELETED = 'ACCOUNT_DELETED';