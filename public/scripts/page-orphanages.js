var map = L.map('mapid').setView([-3.7303142,-38.543164], 15);

// Criando mapa gratuito
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// Criando incone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
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
}).setContent(`${name} <a href= "orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a> `)

// Ponto de marcação
L
.marker([-3.7303142,-38.543164], { icon } )
.addTo(map)
.bindPopup(popup)

const orphanageSpan = documen.querySelectorAll(".orphanages span")
orphanageSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})