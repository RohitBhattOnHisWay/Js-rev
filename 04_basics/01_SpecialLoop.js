//for of 
const arr=[1,2,3,4,5,6]
for(const num of arr){
    console.log(num);
}
//for string 
const str="ROHIT BHATT"
for(const rep of str){
    console.log(`For each value of string:${rep}`);
}//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
for(const key of map){
    console.log(key);
}
//now destructure them 
for(const [key,value] of map){
    console.log(key,'->',value);
}
//for in loop is usd to iter object
const myObj={
    name:"rohit",
    rollno:3452
}
for (const key in myObj) {
    console.log(`${key}and value is ${myObj[key]}`);
        
    }
