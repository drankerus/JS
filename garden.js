// harta sub array
const EMPTY = 0
const CUCUMBER = 1
const MELON = 2
const TOMATO = 3

const CUCUMBER_PRICE = 10
const MELON_PRICE = 20
const TOMATO_PRICE = 30






var garden = [
  MELON,
  MELON ,
  MELON,
  EMPTY,
  EMPTY,
  TOMATO,
  TOMATO,
  EMPTY,
  EMPTY,
  CUCUMBER,
  CUCUMBER
]

function show() {
  var div = document.getElementById('garden')
  div.innerHTML = '';

  for(var i=0; i<=9; i++){
    if(garden[i] == MELON){
    div.innerHTML +=`<div class="melon" onclick="gather(MELON, '+i+')"></div>`
  }else if(garden[i] == TOMATO){
    document.write(`<div class="tomato" onclick="gather(TOMATO)"></div>`)
  }else if(garden[i] == CUCUMBER){
    document.write(`<div class="cucumber" onclick="gather(CUCUMBER)"></div>`)
  }else if(garden[i] == EMPTY ){
    document.write(`<div class="empty"></div>`)}
  }
}
function gather( vegetable, i ){
  if(vegetable == MELON){
    
    alert(MELON_PRICE)
  }else if(vegetable == TOMATO){
    alert(TOMATO_PRICE)
  }else if(vegetable == CUCUMBER ){
    alert (CUCUMBER_PRICE)
  }
}
show();
