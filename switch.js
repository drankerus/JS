function play(song){
  var div_player = document.getElementById('player')
  if (song == 1){
    var url = `https://www.youtube.com/embed/E9eAshaPvYw`;
  }else if (song == 2){
    var url = `https://www.youtube.com/embed/XzO4VIK-sVM`;
  }

  var iframe = `<iframe width="560" height="315" src="${url}?autoplay=1" allowfullscreen></iframe>`;
  div_player.innerHTML = iframe;
}
