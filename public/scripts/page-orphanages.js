var map = L.map('mapid').setView([-3.7303142,-38.543164], 15);

// Criando mapa gratuito
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// Criando incone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// Criando popup 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href= "orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a> ')

// Ponto de marcação
L
.marker([-3.7303142,-38.543164], { icon } )
.addTo(map)
.bindPopup(popup)
    