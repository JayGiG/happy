const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//Criando mapa
const map = L.map('mapid', options).setView([-3.7303142,-38.543164], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
    .addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2]
})

//create and add marker
L
    .marker([-3.7303142,-38.543164], { icon })
    .addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget //Botão clicado

    // "Passeia" por todos os botões e remove a classe .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    // funçaõ responsável por remover a classe .active
    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    // Selacionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar o container da imagem
    imageContainer.src = image.src

    // Adicionando a classe .active ao botão
    button.classList.add("active")
}