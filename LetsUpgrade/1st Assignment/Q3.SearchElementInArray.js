//Program to the Find the Particular Element in the Demo Array
//Here i used includes() function

let Demo = ["Jaguar","Volvo","Audi","Mercedez","BMW"];
let SearchedElem = "Audi";
let Having = Demo.includes(SearchedElem);
if(Having)
console.log("Yes, this Array has", SearchedElem );
else
console.log(`Sorry does not find the ${SearchedElem} in that Array`);