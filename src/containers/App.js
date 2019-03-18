import React, { Component } from 'react';
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Switch>
          <Route exact path="/map" component={LeafletMap}/>
          
          <Route render={() => <div>404 not found</div>}/>
        </Switch>
      </div>
    );
  }
}


export default App;
