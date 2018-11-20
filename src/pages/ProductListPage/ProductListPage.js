import React, { Component } from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import callApi from "../../utils/CallApi";
import {Link} from "react-router-dom";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
    };
  }

  componentDidMount() {
    callApi("products", "GET", null).then(res => {
      this.setState({products: res.data})
    });
  }

  onDelete = (id) => {
    var {products} = this.state;
    callApi(`products/${id}`, "DELETE", null).then(res => {
      if (res.status === 200) { // request success
        var index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products
          });
        }
      }
    });
  }

  findIndex = (products, id) => {
    var result = -1;
    products.forEach((products, index) => {
      if (products.id === id) {
        result = index;
      }
    });
    return result;
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
    //var products = this.props.products;   
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info" style={{marginBottom: "10px"}}>Add product</Link>
        <ProductList>{this.showProducts(this.state.products)}</ProductList>
      </div>    
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products // in index combine
  }
}

export default connect(mapStateToProps, null)(ProductListPage);
