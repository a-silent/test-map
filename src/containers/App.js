import React, { Component } from 'react';
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Welcome from "../components/Welcome";
import MyForm from "../components/MyForm";

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/map" component={LeafletMap} />
          <Route exact path="/form" component={MyForm} />
          
          <Route render={() => <div>404 not found</div>}/>
        </Switch>
      </div>
    );
  }
}


export default App;
