import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import "./App.css";
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class App extends Component {
  render() {
    const position = [49.934771, 36.244521];
    return (
      <Map center={position} zoom={18}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            bad location for life =)
          </Popup>
        </Marker>
      </Map>
    );
  }
}


export default App;
