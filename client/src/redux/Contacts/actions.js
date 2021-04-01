export const CREATE_CONTACT = "CREATE_CONTACT";
export const createContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: { contact },
});

export const UPDATE_CONTACTS_SUCCESS = "UPDATE_CONTACTS_SUCCESS";
export const updateContactsSuccess = (contacts) => ({
    type: UPDATE_CONTACTS_SUCCESS,
    payload: contacts,
});

export const LOAD_CONTACTS_SUCCESS = "LOAD_CONTACTS_SUCCESS";
export const loadContactsSuccess = (contacts) => ({
    type: LOAD_CONTACTS_SUCCESS,
    payload: { contacts },
});

export const LOAD_CONTACTS_FAILURE = "LOAD_CONTACTS_FAILURE";
export const loadContactsFailure = () => ({
    type: LOAD_CONTACTS_FAILURE,
});
