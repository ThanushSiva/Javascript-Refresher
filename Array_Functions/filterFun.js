// creates new array with elements that satisfied the condition

// syntax
// filter((element,index,array) => )
// element -> temp
// index -> current index

const arr1 = ["tony","stark","jarvis","pepper"]
const arr2 = arr1.filter(x => x.length > 5)
console.log(arr2);