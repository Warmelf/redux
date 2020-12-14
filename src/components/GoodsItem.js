import React, { Component } from "react";
// import store from '../redux/store';
import { cartManipulation} from "../redux/action";
import { connect } from "react-redux";
import "../styles.css";


class GoodsItem extends Component {
    // addToCardHandler = (id) => {
    //     store.dispatch(addGoodToCart(id));
    // }
    render() {
        const { title, description, price, id } = this.props;

        return (
            <div className="goods-item" key={id}>
                <h3 className="goods-item__title">{title}</h3>
                <p className="goods-item__price">
                    <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
                    <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
                </p>
                <p className="goods-item__description">{description}</p>
                <button className="goods-item__add-to-card" onClick={() => this.props.cartManipulation(id)}>Add to cart</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    cartManipulation: (id) => dispatch(cartManipulation(id))
});

export default connect(null, mapDispatchToProps)(GoodsItem);