var num1,num2;
var b1,b2;
var n1,n2;
function setup() {
  createCanvas(400, 400);
  num1=createInput();
  num1.position(5,60);
  num2=createInput();
  num2.position(200,60);

b1=createButton('ADD');
b1.position(10,200);
b2=createButton('MULTIPLY');
b2.position(100,200);

b1.mousePressed(add);
b2.mousePressed(mul);
}

function draw() {
  background("green");
  n1=parseInt(num1.value());
  //console.log(n1);
  n2=parseInt(num2.value());
  //console.log(n2);
}
function add(){
console.log("The sum is");
console.log(n1+n2)
}
function mul(){
console.log(n1*n2);
}