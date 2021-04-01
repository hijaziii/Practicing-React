import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { createOrderRequest } from '../redux/Orders/thunks'



function OrderForm(props) {

    const [state, setState] = useState({}); // 
    const firstNameElement = useRef(); //  clear input without refreshing 
    const LastNameElement = useRef(); // clear input without refreshing 

    useEffect(() => {
        console.log(state);
    }, [state])

    const onChangeHandeler = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

    return (
        <div>
            <h1>{props.orderFormAppstate.color}</h1>
            <form>
                <label htmlFor="firstName">First name:</label><br />
                <input ref={firstNameElement} onChange={(e) => onChangeHandeler(e)} type="text" id="firstname" name="firstName" /><br />
                <label htmlFor="lastName">Last name:</label><br />
                <input ref={LastNameElement} onChange={(e) => onChangeHandeler(e)} type="text" id="lastname" name="lastName" /><br />
                <input onClick={
                    (e) => {
                        e.preventDefault(); // wont let the browser refesh 
                        firstNameElement.current.value = ""; // clear input with out refreshing 
                        LastNameElement.current.value = ""; // clear input with out refreshing 
                        setState({}) // will clear state
                        axios.post("/api/orders", state).then((response) => {
                            const configs = response.data;
                            console.log("response.data.results: ", configs);
                            props.setAppState({ ...props.orderFormAppstate, data: props.orderFormAppstate.data.concat(configs) }) // its a sate that is defined in APP.js
                        });

                        // props.createOrderRequest(state)
                    }} type="submit" value="Submit" />
            </form>
        </div>
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
        createOrderRequest: (obj) => dispatch(createOrderRequest(obj)),
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm)