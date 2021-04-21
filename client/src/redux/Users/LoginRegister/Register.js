import React from 'react';
import { connect } from 'react-redux';
import { register } from '../thunks';
import Register from '../../../components/Register/Register';

const RegisterDisplay = (props) => {
    console.log('Questionaire props:', props);
    return <Register {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        err: state.auth.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (formData) => dispatch(register(formData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDisplay);
