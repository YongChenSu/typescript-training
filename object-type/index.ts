interface Point {
  x: number;
  y: number;
  render: Function;
}

let p1: Point = {
  x:3,
  y:4,
  render: function() {
    console.log(this.x, this.y)
  }
}

p1.render();
// console.log(p1.render + p1.x);