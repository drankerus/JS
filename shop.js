function renderProduct(product) {
    var card = document.createElement('div')
    card.className = "card col-md-3 mx-2 mt-2"
    var img = document.createElement('img')
    img.src = product.photos[0]
    img.className = "card-img-top"
    card.appendChild(img)
    var div = document.createElement('div')
    div.className = "card-body"
    card.appendChild(div)
    var h = document.createElement('h5')
    h.className = "card-title"
    h.innerText = product.name
    div.appendChild(h)
    var p = document.createElement('p')
    p.className = "card-text"
    div.appendChild(p)

    var node = document.createTextNode(product.price.value + product.price.currency)
    p.appendChild(node)
    var br = document.createElement('br')
    p.appendChild(br)

    var node = document.createTextNode(product.mass.value + product.mass.unit)
    p.appendChild(node)
    var a = document.createElement('a')
    a.className = "btn btn-primary"
    a.href = "facebook.com"
    a.innerText = "DA BANII"
    a.addEventListener('click',addToCard)
    div.appendChild(a)

    var row = document.querySelector('#products .row')
    row.appendChild(card)
}

function renderProductList() {
    for(var i=0;i<products.length;i++){
        renderProduct(products[i])
    }
}
renderProductList()
function functionName() {

}
function addToCard() {
    alert()
}
