import React, { Component } from "react";
import { connect } from "react-redux";
import {cartManipulationRemove } from "../redux/action";
import "../styles.css";


class CartItem extends Component {
    render() {
        const { title, price, id } = this.props;
        return (
            <div className="cart-item">
                <p className="cart-item__title">{title}</p>
                <p className="cart-item__price">{price}.00$</p>
                <button onClick={() => this.props.cartManipulationRemove(id)}>X</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    cartManipulationRemove: (id) => dispatch(cartManipulationRemove(id))
});

export default connect(null, mapDispatchToProps)(CartItem);