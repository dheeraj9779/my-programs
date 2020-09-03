//Program to Print the Array in Reverse Order

let Demo = ["Remo","karan","Alia","Mahesh","Varun"];
let newArray = [];

//Also use reverse() method
//console.log(Demo.reverse());

for(let i=Demo.length-1; i>=0;i--){
    newArray.push(Demo[i]);
}
console.log(newArray);