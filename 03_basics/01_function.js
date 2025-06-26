function calculateCartprice(...num1){//...vararg
return num1//this return array
}
console.log(calculateCartprice(200,3000,440004,232));
//passing object in function as a argument 
const obj={
    name:"rohit bhatt",
    rollno:"45"
}
function objfun(anyobject){
    return anyobject.rollno=200
}
objfun(obj)
console.log(obj);
// we can do with same with array
//++++++++++++++
//1
console.log(add1(2,3));
function add1(num1,num2){
    return num1,num2
}
//console.log(add2);// cant do due to concept hoising in js
const add2=function(num1,num2){
    return num1+num2
}
