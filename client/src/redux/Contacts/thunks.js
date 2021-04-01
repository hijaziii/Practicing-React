/* eslint-disable no-unused-vars */
import { createContact, loadContactsSuccess, loadContactsFailure, updateContactsSuccess } from "./actions";
import axios from "axios";

export const createContactRequest = (state) => async (dispatch) => {
    axios.post("/api/contacts", state).then((response) => {
        const configs = response.data;

        dispatch(createContact(configs));
        console.log("response.data.results: ", configs);
    });
};


export const addTaxRequest = (state) => async (dispatch) => {
    dispatch(updateContactsSuccess(state));
};



export const displayAlert = (text) => () => {
    alert(text);
};
