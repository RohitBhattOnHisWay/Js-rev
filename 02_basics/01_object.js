// object creation singalton
//const tinderUser=new Object()
const tinderUser={}//non singalton object
console.log(tinderUser);
tinderUser.id="Rohit"
tinderUser.name="Rohit Bhatt"
console.log(tinderUser.name);
//nested object creation
const regularUser={
    name:"ROHIT BHATT",
    ID:{
        "Adhar card":1234567,
        "Pan card":"12CG2NN3",
        "Driving licence":"45JFI43",
        Taxno:999993000
    },
    EnrollnmentNO:1234554,
    DOB:"21-04-3004"    
}
console.log(regularUser.ID["Adhar card"]);
console.log(regularUser.ID.Taxno);
//To add object in one object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
//swallow copy 
const original = {
  name: "Rohit",
  address: {
    city: "Delhi"
  }
}

const copy = Object.assign({}, original)
copy.address.city = "Mumbai"

console.log(original.address.city); // "Mumbai" 😱
console.log(Object.keys(regularUser));//this is used to get all key value of allobj
console.log(Object.values(regularUser));
//to check if property exists
console.log(regularUser.hasOwnProperty('name'));
//destructuring object member 
const classroom={
    classname:"JINY mam Class",
    Enclyclopedia:"Bada hard naam hai bhai"
}
const {Enclyclopedia:enco}=classroom
console.log(enco);//This is used for destructuing of object name 
