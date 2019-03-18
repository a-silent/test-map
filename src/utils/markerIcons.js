import L from "leaflet";

const DefaultIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconAnchor: [13, 41],
  popupAnchor: [0, -41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export const walkIcon = L.icon({
  iconUrl: require("../assets/image/walk_icon.png"),
  // iconSize: [16, 26],
  iconAnchor: [13, 43],
  popupAnchor: [0, -43]
})