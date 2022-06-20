// [...a,b] {...a,b}
// used for both arrays and objects

const arr1 = [1,2,3]
const arr2 = [...arr1,4,5,6]

console.log(arr2);

const person = {
    name: "thanu"
};
const newPerson = {
    ...person,
    age: 22
};

console.log(newPerson);