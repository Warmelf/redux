import React, { Component } from "react";
//import store from '../redux/store';
import { connect } from "react-redux";
// import { addGoodToCart } from "../redux/action";
import "../styles.css";

import GoodsItem from './GoodsItem';

class Goods extends Component {
  // state = {
  //   goods: []
  // }
  
  // componentDidMount() {
  //   const state = store.getState();
  //   this.setState({ 
  //       goods: [...state.goods] 
  //   });
  // }  
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      goods: state.goods
  }
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Goods);