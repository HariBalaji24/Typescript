const ID = Symbol("id");
const user = {
    [ID]: 1,
    name: "Hari"
};


//arrays 
let numarray: (number|string)[] = [1,2,3,4,"eren yeager"]
numarray.push("mikasa")
console.log(numarray)

//tuples
let numsarray: [number,string,boolean] = [10,"eren",true]
numsarray.push(true)
console.log(numsarray) 
// console.log(numsarray[3])  not possible