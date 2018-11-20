import React, { Component } from 'react';
import callApi from "../../utils/CallApi";
import {Link} from "react-router-dom";

class ActionPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      id: "",
      inputName: "",
      inputPrice: "",
      checkStatus: "",
    };
  }

  componentDidMount() {
    var {match} = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then(res => {
        var data = res.data;
        this.setState({
          id: data.id,
          inputName: data.name,
          inputPrice: data.price,
          checkStatus: data.status,
        });
      }); 
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var {history} = this.props;
    var {inputName, inputPrice, checkStatus} = this.state;
    if (this.state.id) { // update
      callApi(`products/${this.state.id}`, "PUT", {
        name: inputName,
        price: inputPrice,
        status: checkStatus
      }).then(res => {
        history.goBack();
      });
    } else {
      callApi("products", "POST", {
        name: inputName,
        price: inputPrice,
        status: checkStatus,
      }).then(res => {
        history.goBack();
        //history.push("/");
      });
    }
  }

  render() {
    return (    
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <legend>Add product</legend>
          <div className="form-group">
            <label>Product name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="" placeholder="Input product name" 
              value={this.state.inputName}
              onChange={this.onChange}
              name="inputName"/>
          </div>              
          <div className="form-group">
            <label>Product price:</label>
            <input 
              type="text" 
              className="form-control" 
              id="" placeholder="Input product price" 
              value={this.state.inputPrice}
              onChange={this.onChange}
              name="inputPrice"/>
          </div>
          <div className="form-group">
            <label>Status:</label>                   
          </div>
          <div className="checkbox">
            <label>
              <input 
                type="checkbox" 
                name="checkStatus" 
                value={this.state.checkStatus} 
                onChange={this.onChange}
                checked={this.state.checkStatus}
                />
              Active
            </label>
          </div>              
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/product-list" className="btn btn-danger cancel">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default ActionPage;
