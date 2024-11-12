// console.log(null<=0);
// console.log(null==0);
// console.log(null>=0);
// in js, >,<,>=,<= works differently from == operator
// >,<,>=,<= converts null to zero and then compare
// == operator converts null to Nan
//we should avoid this kinda comparison
const outsideTemp=null
console.log(typeof outsideTemp);// null's type is object
const id=Symbol("123");//
const anotherID=Symbol("123");// symbol is used to uniquely identify 
console.log(id===anotherID);
let numlist=[1,2,3];
console.log(typeof numlist);
function print(){
    console.log("Hello World!");
    
}
console.log(typeof print);
//primitive data type(Stack) copies the value
//non-primitive data type(Heap) copies the reference




