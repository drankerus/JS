var stage = document.getElementById('stage')

function addCoin() {


var div = document.createElement('div')
var img = document.createElement('img')
    img.className = 'rotating '
    img.addEventListener('animationend', function(e){
        if(e.animationName=='rot'){
            e.target.className = 'rotx'
        }
    })
    div.appendChild(img)
    stage.appendChild(div)
    div.className = 'coin falling '

    div.style.left = Math.round(Math.random()*100) +'%'
    div.style.transform= 'scale('+(Math.random()*1.5 + 0.2) +')'
    img.src = 'coin.png'


}
function removeCoin() {

}
