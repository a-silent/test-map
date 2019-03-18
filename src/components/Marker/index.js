import React from "react";
import {Marker, Popup} from "react-leaflet";

export default props =>
  props.markers.map((item, index) => (
	  <Marker key={index} position={item.position}>
		{item.popup && <Popup>{item.popup}</Popup>}
	  </Marker>
	))
