const car ={
    age: 23,
    brand: "Volvo",
    name: "V60",
    milage: 124000,
    year: new Date()
};
const auto ={
    age: 23,
    brand: "Volvo",
    color: "blue"
};


function sayHallo(obj, param) {
    const hasProperty = obj.hasOwnProperty("name");
    if (hasProperty) {
        console.log ("hello:  ", obj[param]); 
    }
    else {
        console.log ("hello!:  ");
    }; 
}

sayHallo(car, "name");

function displayProperties(obj){
  const keys = Object.keys(obj)  
  console.log("Właściwości: ", keys)
}
displayProperties(car);
displayProperties(auto);

function displayOnlyNumber(num) {
    const keys = Object.values(num)
    //[23, "volvo", "v60", 124000, "red"]=keys
    //keys[0]=23
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
    
    if (typeof element === "number") {
    console.log("tylko cyfry: ", element);
    }   

    }
    

    
}
displayOnlyNumber(car);


//Napisz funkcję która pokaże Ci wszystkie wartości obiektów i typ tej wartości

function displayType(object5) {
    const values = Object.values(object5)
    for (let index = 0; index < values.length; index++) {
        const element = values[index];
    
    switch(typeof element) {
        case "number": {
            console.log("jestem luczbą: ", element)
        break;
        }
        case "string": {
            console.log("jestem textem: ", element)
        break;
        }
        case "object": {
            console.log("jestem objectem: ", element)
        break;
        }
        default: {
            console.log("nie jestem żadnym z powyższych")
        }
    }

}
    
}
displayType(car);
//wyświetl w console.log color samochodu z car i auto


function showColor(objx) {
    const hasColor = objx.hasOwnProperty("color")
    if (hasColor) {
        console.log("kolor auta to: ", objx.color)        
    }
    else {
        console.log("nie ma koloru auta!")
    }
        
}
showColor(car)
showColor(auto)