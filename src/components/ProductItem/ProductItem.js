import React, { Component } from 'react';
import "../../css/Styles.css";
import {Link} from "react-router-dom";

class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm("You sure want to delete this item")) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.status ? "Active" : "Unactive";
    var statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success btn-edit">Edit</Link>
          <button type="button" className="btn btn-danger btn-delete" onClick={() => this.onDelete(product.id)}>Delete</button>
        </td>      
      </tr>   
    );
  }
}

export default ProductItem;
