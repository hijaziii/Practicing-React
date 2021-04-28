/* eslint-disable no-unused-vars */
import { createUser, userLoaded, authError, loginSuccess, logoutSuccess } from "./actions";
import api from '../../utils/api';


export const loadUser = () => async (dispatch) => {
    api.get("/auth").then((response) => {
        const configs = response.data;
        dispatch(userLoaded(configs));
        console.log("response.data.results: ", configs);
    }).catch((err) => {
        dispatch(authError(err.response.data));
        console.log(err)
    })
};

export const register = (state) => async (dispatch) => {
    // console.log("register:", state);
    api.post("/users", state).then((response) => {
        const configs = response.data;
        dispatch(authError({}));
        dispatch(createUser(configs));
        dispatch(loadUser());
        console.log("response.data.results: ", configs);
    }).catch((err) => {
        dispatch(authError(err.response.data));
        console.log(JSON.stringify(err.response.data))
    });
};



export const displayAlert = (text) => () => {
    alert(text);
};

// Login User
export const login = (state) => async (dispatch) => {
    // console.log("register:", state);
    api.post("/auth", state).then((response) => {
        const configs = response.data;
        dispatch(authError({}));
        dispatch(loginSuccess(configs));
        dispatch(loadUser());
        console.log("response.data.results: ", configs);
    }).catch((err) => {
        dispatch(authError(err.response.data));
        console.log(JSON.stringify(err.response.data))
    });
};

export const clearAuthErr = () => async (dispatch) => {
    dispatch(authError({}));
};

// Logout
export const logout = () => async (dispatch) => {
    dispatch(logoutSuccess());
}