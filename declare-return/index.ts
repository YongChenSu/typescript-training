// compiler time error
// function add1(n1:number, n2:number):number {
//   console.log(n1+n2)
// }
// ok
// function add2(n1:number, n2:number):number {
//   return n1+n2
// }

// compile time error
// let ans1:string=add2(3,4);
// ok
// let ans2:number=add2(3,4);
// compile time error
// let ans3:number=add2("Hello",4);

function add(n1:number, n2:number): void {
  console.log(n1+n2)
}
// compile time error
// let ans:number=add(3,4)
add(3, 4) // ok