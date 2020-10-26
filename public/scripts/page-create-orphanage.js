// map
const map = L.map("mapid").setView([-3.7522141, -38.535286], 15);

// tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// icon
const icon = L.icon({
  iconUrl: "/public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
//Quando clicar no mapa
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // option to add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar  campos de fotos
function addPhotoField() {
  // pegar containers de fotos
  const container = document.querySelector("#images");

  // pegar o container para duplicar
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clonar a proxima imagem selecionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // checar se o campo está vazio, se sim, não adicionar outro campo
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar imagens ao container
  input.value = "";

  // adicionar imagens clonadas ao container 
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length <= 1) {
    // limpar valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar campo
  span.parentNode.remove();
}

//selecionar sim ou não
function toggleSelect(event) {
  // remover a classe .active dos botoes
  document.querySelectorAll('.button-select button')
  .forEach(function (button) {
    button.classList.remove("active")
  })

  // inserir a classe active ao clicar nos botoes
  const button = event.currentTarget
  button.classList.add("active")

  // update input hidden with the selected value
  const input = document.querySelector('[name="open_on_weekends"]')

  // check yes or no
  input.value = button.dataset.value
}

/*function validate(event) {
  // view if lat and lng are ok 
  if (validate.value == "") {
    return;
  }
  event.preventDefault()
  alert('Preencha todos os campos, talvez você esqueceu de pôr a localização no mapa :)')
}*/