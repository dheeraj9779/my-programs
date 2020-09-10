//Program to display only elements containing "a" in them from a Array

let Demo = ["reman","proof","guitar","fluffy","car","lock","train"];
let newArray = [];
for(let i=0;i<Demo.length;i++){
   if( Demo[i].includes('a')){
       newArray.push(Demo[i]);
   }
}

console.log(newArray);
