import React, { Component } from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {actFetchRequest, actDeleteRequest} from "../../action/index";

class ProductListPage extends Component {

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = (id) => {
    this.props.deleteProduct(id);
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((element, index) => {
        return (
          <ProductItem key={index} product={element} index={index} onDelete={this.onDelete}/>
        );
      });
    } 
    return result;
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info" style={{marginBottom: "10px"}}>Add product</Link>
        <ProductList>{this.showProducts(this.props.products)}</ProductList>
      </div>    
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products // in index combine
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchRequest())
    },
    deleteProduct: (id) => {
      dispatch(actDeleteRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
