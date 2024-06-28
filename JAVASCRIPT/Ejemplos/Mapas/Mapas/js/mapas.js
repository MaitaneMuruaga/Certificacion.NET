let map;
let marker;
// Clave de mapbox. NECESARIA
mapboxgl.accessToken = 'pk.eyJ1Ijoiamxwcm9mZXNvciIsImEiOiJjbHNhdHB3ZDEwNzNsMmpvNWxhMTRpNDNzIn0.b5FJ5Uz1mF4oCXB2YbTCJQ';

const geolocalizar = () => {
  if (navigator.geolocation) {
    // Cuando obtenemos la geolocalización dibujamos el mapa y...
    navigator.geolocation.getCurrentPosition(dibujarMapa);
    // ... vigilamos los movimientos par actualizar la posición
    navigator.geolocation.watchPosition(actualizaMiPosicion);
  } else {
    alert('Tu navegador no permite geolocalizar');
  }
};

const dibujarMapa = (dataGeo) => {
  const latitud = dataGeo.coords.latitude;
  const longitud = dataGeo.coords.longitude;
  // Dibujamos el mapa en el html dentro del div con id 'map'. Como centro de mapa, ponemos nuestras coordenadas
  map = new mapboxgl.Map({
    container: 'map',
    center: [longitud, latitud],
    zoom: 18
  });

  agregarMarcador(longitud, latitud);
};

const agregarMarcador = (longitud, latitud) => {
  const nombre = prompt('Introduce tu nombre');
  marker = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([longitud, latitud])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${nombre}</h3><p>Estoy aquí</p>`))
    .addTo(map);
};

const actualizaMiPosicion = async (dataGeo) => {
  const latitud = dataGeo.coords.latitude;
  const longitud = dataGeo.coords.longitude;
  marker.setLngLat([longitud, latitud]);
  map.flyTo({ center: [longitud, latitud] });
};

document.addEventListener('DOMContentLoaded', geolocalizar);
