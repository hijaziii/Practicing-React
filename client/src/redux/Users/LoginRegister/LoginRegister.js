/* eslint-disable no-unreachable */
import { connect } from 'react-redux';
import LoginRegister from '../../../features/LoginRegisterPage/LoginRegisterPage';
import { clearAuthErr } from '../thunks'

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        err: state.auth.error
    };
};
const mapDispatchToProps = (dispatch) => {

    return {
        clearAuthErr: () => dispatch(clearAuthErr())
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);

