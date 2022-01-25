console.log("hello")

//deklarowanie zmiennych
var a=5;
let b=6;
const c=7;
a=6;
b=7;
let d="example";
let e=true;
let f=false;
let emptyArray=["test", a, b, c, 9, 3.14, true];
let today=new Date();
let h=3.14;
let obj={
    a:12,
    b:13,
    c:d,
    d,
    e:emptyArray
};
obj.c
console.log(obj);
d.includes("ex")
console.log("result of incudes ",d.includes("ex"));

function calcutateSquare(sideA, sideB){
    if (typeof sideA==="number" && typeof sideB==="number"){
        return sideA*sideB;      
    }
return "Invalid parameters types ";

};
const result=calcutateSquare(3,7);
const result2=calcutateSquare(5,7);
const result3=calcutateSquare(a,d);

console.log("wynik mnożenia ",result, result2, result3)

/*
* Instrukcja warunkowa
*/
if (1<0){
console.log ("jestem w if", 1>0)
}
const mydiv=document.getElementById("ab1")
console.log(mydiv);
let counter=0;
mydiv.innerHTML=counter;
function addone()
{
    // if (counter<10)
    // {
    //     counter=counter+2
    // }else if(counter>=10&&counter<=20){
    //     counter=counter+3
    // }
    // else{
    // counter=counter+4
    // }
    switch(counter){
        case (counter<10):{
            console.log("xsd")
            counter=counter+2
            break;
        }
        case (counter>=10&&counter<=20):{
            counter=counter+3
            break;
        
        }default:{
            console.log("cokolwiek")
            counter=counter+4
        }
    }


    mydiv.innerHTML=counter;
    console.log("test")
};
function minusone(){
    
    counter=counter-2
    mydiv.innerHTML=counter;
    console.log("test")
};

switch(3){
    case 5:{
        console.log("switch ",5)
        break;
    }
    case 7:{
        console.log("switch ",7)
        break;
    }
    case 10:{
        console.log("switch ",10)
        break;
    }default:{
        console.log("dupa")
    }
}
for (let index = 0; index <= 5; index++) {
    console.log("index", index);
    
}
console.log(emptyArray)
for (let index = 0; index < emptyArray.length; index++) {
    if (index%2 !==0) {
        const element = emptyArray[index];
        console.log("wynik", index,  element)
    }
    
}