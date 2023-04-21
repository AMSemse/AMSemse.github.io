/*
// Initialize and add the map
let map;

async function initMap() {
  // The location of Kahvio
  const position = { lat: 60.242409175074265, lng: 24.05214242690713 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Kahvio
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Kahvio
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Huoltamo-Kahvio Kataja",
  });
}

initMap();
*/