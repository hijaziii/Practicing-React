import {
    CREATE_ORDER,
    LOAD_ORDERS_SUCCESS,
    UPDATE_ORDERS_SUCCESS,
    LOAD_ORDERS_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] };

const orders = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_ORDER: {
            const { order } = payload;
            return {
                ...state,
                data: state.data.concat(order),
            };
        }

        case LOAD_ORDERS_SUCCESS: {
            const { orders } = payload;
            return {
                ...state,
                isLoading: false,
                data: orders,
            };
        }

        case UPDATE_ORDERS_SUCCESS: {
            const { taxFee } = payload;
            return {
                ...state,
                taxFee,
            };
        }
        case LOAD_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default orders