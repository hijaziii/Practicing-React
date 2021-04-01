import React from "react";
import { connect } from 'react-redux'
import { createOrderRequest } from '../redux/Orders/thunks'

function ConfirmOrders(props) {
    return (
        <div style={{ borderStyle: "solid", width: "15%" }}>
            <h1>Confirm-Order</h1> <br />
            {props.confirmOrdersState.color}
            {/* {props.orders.taxFee && props.orders.taxFee} */}
            {props.confirmOrdersState.taxFee && props.confirmOrdersState.taxFee}
            <table border='1'>
                <thead>
                    <tr>
                        <th></th>
                        <th>firstName</th>
                        <th>lastName</th>
                    </tr>
                </thead>
                <tbody>
                    {props.confirmOrdersState.data.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td><button onClick={() => { props.setAppState({ ...props.confirmOrdersState, data: props.confirmOrdersState.data.filter((e2, i2) => i2 !== i) }) }}>Delete</button></td>
                                <td>{e.item.firstName}</td>
                                <td>{e.item.lastName}</td>
                            </tr>
                        );
                    })}
                    {/* {props.orders.data.map((e) => {
                    return (
                        <tr>
                            <td>{e.item.firstName}</td>
                            <td>{e.item.lastName}</td>
                        </tr>
                    );
                })} */}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createOrderRequest: (obj) => dispatch(createOrderRequest(obj)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(ConfirmOrders)
