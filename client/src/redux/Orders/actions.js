export const CREATE_ORDER = "CREATE_ORDER";
export const createOrder = (order) => ({
    type: CREATE_ORDER,
    payload: { order },
});

export const UPDATE_ORDERS_SUCCESS = "UPDATE_ORDERS_SUCCESS";
export const updateOrdersSuccess = (orders) => ({
    type: UPDATE_ORDERS_SUCCESS,
    payload: orders,
});

export const LOAD_ORDERS_SUCCESS = "LOAD_ORDERS_SUCCESS";
export const loadOrdersSuccess = (orders) => ({
    type: LOAD_ORDERS_SUCCESS,
    payload: { orders },
});

export const LOAD_ORDERS_FAILURE = "LOAD_ORDERS_FAILURE";
export const loadOrdersFailure = () => ({
    type: LOAD_ORDERS_FAILURE,
});
