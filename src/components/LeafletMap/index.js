import React, { Component } from 'react';
import {connect} from "react-redux";

import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

import "../../utils/animatedMarker";
import { walkIcon } from "../../utils/markerIcons";

import Marker from "../Marker"

class LeafletMap extends Component {
  
  handleClick = event => {
    const { coordinates } = this.props.geoJSON.fromHomeToAlevel.features[0].geometry
 
	const coordinatesReverse = coordinates.map(item => item.reverse())
 
	const line = L.polyline(coordinatesReverse)
	const animatedMarker = L.animatedMarker(line.getLatLngs(), {
	  interval: 300,
	  icon: walkIcon,
	  onEnd: () => event.target.removeLayer(animatedMarker)
	});
	event.target.addLayer(animatedMarker);
  }

  render() {
    console.log(this.props)
    const { center, zoom, maxZoom, geoJSON, markers } = this.props;
	
    return (
	  <Map
		onClick={this.handleClick}
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
		  style={feature => feature.properties}
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