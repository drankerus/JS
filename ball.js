class Ball{
  constructor(color,number,x,y,speed){
    this.color = color;
    this.number = number;
    this.x = x;
    this.y=  y;
    this.speed = speed;
  }
  render(){
    var html = `<div class="ball ball--${this.color}" style="position: absolute; left: ${this.x}px; top:${this.y}px;" >
        <div>  ${this.number} </div>

    </div>`
    document.getElementById("table").innerHTML += html;
  }
}
