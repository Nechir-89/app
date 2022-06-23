this.age = 19;

function setAge(){
  // this.age = 0;
  let age = 5;
  console.log("age: " , age);
  console.log("this.age: " , this.age); // undefined
}
setTimeout(() => {
  // this.age++;
  // console.log("age: " , age);
  console.log("this.age: " , this.age);
}, 1000);

setAge();