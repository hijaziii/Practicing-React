/* eslint-disable no-unreachable */
import React from 'react';
import { connect } from 'react-redux';
import LoginRegister from '../../../features/LoginRegisterPage/LoginRegisterPage';


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        err: state.auth.error
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);

