//create map
const map = L.map('mapid').setView([-25.7680999, -53.5252639], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
})

let marker;

//create and add maker//
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//add image field//
function addPhotoField () {
    //get the image container #images
    const container = document.querySelector('#images')
    //duplicate container for .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realize clone of last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verify if field it's clean,if y, not add in image container
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }
    //clean field before add in images container
    //input.value = ""
    //add clone in container of #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //delete field if it's clean
    span.parentNode.remove()
}

// select y or n
function toggleSelect(event) {
    //remove ;active class (of buttons)
    document.querySelectorAll('.button-select button')    
    //.forEach(button) => button.classList.remove('active')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    
    //put .active class
    const button = event.currentTarget
    button.classList.add('active')
    
    //update input hidden with select value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verify yes or not
    input.value = button.dataset.value
}

//function validate(event) {
    //const mapContainer = document.querySelectorAll('.map-container')
    //const input = mapContainer
    //if(input.value == "") {
    //   return
    //}
    //event.preventDefault()
//} 