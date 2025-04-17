import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { StarterIcon } from "../util/Markers";

const RoutingMachine = ({ start, end}) => {
  const map = useMap(); // Get the Leaflet map instance

  useEffect(() => {
    if (!map) return;

    // Create waypoints with custom icons
    const waypoints = [
      L.Routing.waypoint(L.latLng(start.lat, start.lng), undefined, { icon: StarterIcon }),
      L.Routing.waypoint(L.latLng(end.lat, end.lng), undefined, { icon: end.MyIcon }),
    ];

    // Create a new routing control instance
    const routingControl = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true,
      lineOptions: { styles: [{ color: "blue", weight: 5 }] }, // Custom line color & weight
      createMarker: function (i, waypoint, n) {
        return L.marker(waypoint.latLng, {
          icon: waypoint.options.icon || StarterIcon, // Default to StarterIcon if missing
        });
      },
    }).addTo(map);

    return () => {
      map.removeControl(routingControl); // Cleanup on unmount
    };
  }, [map, start, end]);

  return null; // No UI element needed
};

export default RoutingMachine;
