import {
    CREATE_CONTACT,
    LOAD_CONTACTS_SUCCESS,
    UPDATE_CONTACTS_SUCCESS,
    LOAD_CONTACTS_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] };

const contacts = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case CREATE_CONTACT: {
            const { contact } = payload;
            return {
                ...state,
                data: state.data.concat(contact),
            };
        }

        case LOAD_CONTACTS_SUCCESS: {
            const { contacts } = payload;
            return {
                ...state,
                isLoading: false,
                data: contacts,
            };
        }

        case UPDATE_CONTACTS_SUCCESS: {
            const { data } = payload;
            return {
                ...state,
                data,
            };
        }
        case LOAD_CONTACTS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default contacts