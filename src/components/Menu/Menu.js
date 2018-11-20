import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  }, {
    name: "Management products",
    to: "/product-list",
    exact: false,
  }
];

const CustomLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((element, index) => {
        return (
          <CustomLink key={index} label={element.name} to={element.to} activeOnlyWhenExact={element.exact}/>
        );
      });
    }
    return result;
  }

  render() {
    return (
      <div className="Menu">
        <div className="navbar">
          <label className="navbar-brand">Pattern Project</label>
          <ul className="nav navbar-nav">
            {this.showMenu(menus)}
          </ul>
        </div>   
      </div>    
    );
  }
}

export default Menu;
