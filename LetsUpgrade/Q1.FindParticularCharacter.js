//Program to Find the particular character in a String 
// Here i searched a character D in String and if that character in the string it also shows the index no. on which it be found

let TestString = "My Name is Dheeraj Sharma";
let SearchedChar = "D";

for(let i=0;i<TestString.length;i++){
    if(TestString[i] == SearchedChar)
    {
        console.log(`Found the ${SearchedChar} at index`,i);
    }
}