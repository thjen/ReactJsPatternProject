import React, { Component } from 'react';
import './css/App.css';
import Menu from "./components/Menu/Menu";
import routes from "./routers";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

class App extends Component {

  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((element, index) => {
        return <Route key={index} path={element.path} exact={element.exact} component={element.main}/>
      });
    }
    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <Router>
        <div className="MyApp">
          <Menu/>
          <div className="container">
            <div className="row">
              {this.showContent(routes)}
            </div>
          </div>  
        </div>  
      </Router>  
    );
  }
}

export default App;
