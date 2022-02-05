const car ={
    age: 23,
    brand: "Volvo",
    name: "V60",
    milage: 124000,
    color: "red"
};
const auto ={
    age: 23,
    brand: "Volvo",
    milage: 124000,
    color: "red"
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
