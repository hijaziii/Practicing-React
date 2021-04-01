/* eslint-disable no-unused-vars */
import { createOrder, loadOrdersSuccess, loadOrdersFailure, updateOrdersSuccess } from "./actions";
import axios from "axios";

export const createOrderRequest = (state) => async (dispatch) => {
    axios.post("/api/orders", state).then((response) => {
        const configs = response.data;

        dispatch(createOrder(configs));
        console.log("response.data.results: ", configs);
    });
};

export const addTaxRequest = (state) => async (dispatch) => {
    dispatch(updateOrdersSuccess(state));
};



export const displayAlert = (text) => () => {
    alert(text);
};
