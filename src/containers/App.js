import React, { Component } from 'react';
import LeafletMap from "../components/LeafletMap";
import Header from "../components/Header";

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <LeafletMap/>
      </div>
    );
  }
}


export default App;
