//...
//spread - used to split up array elements OR object properties
// const newArray = [...oldArray,1,2]
// const newObject= {...oldObject,newProp:5}
//---------------------------------------------
//Rest -- used to merge a list of function arguments into an array
//function sortArgs(...args){
    //return args.sort()
// }

const numbers = [1,2,3];
const numbers2 = [10,20,30];
const newNumbers = [...numbers,4,5,6];
console.log(newNumbers);
const numbers3 = [...numbers,...numbers2];
console.log(numbers3);


const person = {
    name: 'Max'
  };
  
  const newPerson = {
    ...person,
    age:30
  };
  
  console.log(newPerson);


  //rest
  const filter = (...args) => {
    return args.filter(el => el === 1 || el === 6);
  }
  
  console.log(filter(1,2,1,3,4,5,1,6))