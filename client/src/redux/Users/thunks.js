/* eslint-disable no-unused-vars */
import { createUser, userLoaded, authError, loginSuccess, logoutSuccess } from "./actions";
import api from '../../utils/api';


export const loadUser = () => async (dispatch) => {
    api.get("/auth").then((response) => {
        const configs = response.data;
        dispatch(userLoaded(configs));
        console.log("response.data.results: ", configs);
    }).catch((err) => {
        dispatch(authError());
        console.log(err)
    })
};

export const register = (state) => async (dispatch) => {
    // console.log("register:", state);
    api.post("/users", state).then((response) => {
        const configs = response.data;

        dispatch(createUser(configs));
        dispatch(loadUser());
        console.log("response.data.results: ", configs);
    });
};



export const displayAlert = (text) => () => {
    alert(text);
};

// Login User
export const login = (email, password) => async (dispatch) => {
    const body = { email, password };
    console.log(body);
    try {
        const res = await api.post('/auth', body);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
        dispatch(loadUser());
    } catch (err) {
        //const errors = err.response.data.errors;
        console.log(err);


    };
};

// Logout
export const logout = () => async (dispatch) => {
    dispatch(logoutSuccess());
}