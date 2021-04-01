import { combineReducers } from 'redux';
import orders from '../redux/Orders/reducers';
import contacts from '../redux/Contacts/reducers';
import auth from '../redux/Users/reducers';
export default combineReducers({
     orders,
     contacts,
     auth



});

