// returns index of first found match

// syntax
// findIndex((element,index,array) => )
// element -> temp
// index -> current index

const arr1 = [1,2,3,3,5]
const isLarge = ele => ele > 2
console.log(arr1.findIndex(isLarge));