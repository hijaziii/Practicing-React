import React from 'react'
import { connect } from 'react-redux'
import { addTaxRequest } from '../redux/Orders/thunks'

function AddTax(props) {
    console.log("Tax", props);

    return (

        <div>
            {props.addTaxAppState.color}
            <button onClick={() => { props.setAppState({ ...props.addTaxAppState, taxFee: 'Tax : %100' }) }}>Tax-Button</button>
            {/* <button onClick={() => { props.addTaxRequest({ taxFee: 'Tax : %100' }) }}>Tax-Button</button> */}
        </div >
    )
}

// Redux 
const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // addAnswersRequest: (obj) => dispatch(addTodoRequest(obj)),
        //     fetchCollections: () => dispatch(fetchCollections()),
        //   onRemovePressed: id => dispatch(removeCollectionRequest(id)), 
        //   onActivatePressed: id => dispatch(markCollectionAsActiveRequest(id)),
        addTaxRequest: (obj) => dispatch(addTaxRequest(obj)),
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTax)
