import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import Marker from "../Marker"

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {connect} from "react-redux";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [13, 41],
  popupAnchor: [0, -41]
});

L.Marker.prototype.options.icon = DefaultIcon;

class LeafletMap extends Component {

  render() {
    
    const { center, zoom, maxZoom, geoJSON, markers } = this.props;
	
    return (
	  <Map
		center={center}
		zoom={zoom}
		maxZoom={maxZoom}
	  >
		<TileLayer
		  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
		/>
		<Marker markers={markers}/>
		<GeoJSON
		  data={geoJSON.fromHomeToAlevel}
		  style={() => ({
			color: "blue",
			weight: 5
		  })}
		/>
	  </Map>
	)
  }
}

const mapStateToPops = state => ({
  center: state.map.initialCenter,
  zoom: state.map.initialZoom,
  maxZoom: state.map.maxZoom,
  geoJSON: state.map.geoJSON,
  markers: state.map.markers
})

export default connect(mapStateToPops, null)(LeafletMap);