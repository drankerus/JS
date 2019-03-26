class Basket {
  constructor(number,x,y,s){
    this.number=number;
    this.x=x;
    this.y=y;
    this.s = s;
  }
  render(){
    var hole=`
      <div class="hole hole--${this.number}" style="position: absolute; left: ${this.x}px; top:${this.y}px; width: ${this.s}px; height:${this.s}px; ">

    </div>`;
    document.getElementById("table").innerHTML += hole;
  }
}
