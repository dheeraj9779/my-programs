let Demo = ["reman","proof","guitar","fluffy","car","lock"];
let newArray = [];
for(let i=1;i<=Demo.length;i++){
   if( Demo[i].includes("a")){
       newArray.push(Demo[i]);
   }
}
console.log(newArray);
const val = Demo.filter((elem) => {
    return elem.includes("a");
})
console.log(val);