//Stwórz objekt o nazwie Processor składający się z wybranego modelu CPU oraz jego parametrami

const processor ={
    cpuBrand: "AMD",
    cpuModel: "Phenom",
    cpuSignature: "1090T",
    cpuBaseClock: 3.2,
    cpuTurboClk: 3.6,
    archName: "Deneb",
    coreCount: 6,
    threadCount: 6,
    cpuLit: 0.65,
    cacheL2: 512
}
//Stwórz tabelę zawierającą parametry procesora AMD K6 II+ 550MHz

const cpuArray = ["AMD", "K6 II+", 550, 512];

//Stwórz funkcję która wypiszę wartości objektu processor

function cpuParam(cpu1) {
    const funparam = Object.values(cpu1)
    for (let index = 0; index < funparam.length; index++) {
        const element = funparam[index];
        
        console.log("wyświetlam parametry CPU: ", element);
    }
    
}
cpuParam(processor)

//Stwórz funkcję która wypisze wartości objektu processor

function displayProperties(cpu2) {
    const funproper = Object.keys(cpu2)
for (let index = 0; index < funproper.length; index++) {
    const element = funproper[index];

    console.log("wyświetlam wartości procesora ", element)
    }
}
displayProperties(processor)

//napisz funkcję która wyświetli tylko cyfry z tabeli cpuArray

for (let index = 0; index < cpuArray.length; index++) {
    const element = cpuArray[index];
    if (typeof element === "number") {
        console.log(element);
    }
}

//Jeszcze raz z pamięci napisz funkcję która pokarze wartości z tabeli cpuArry

function cpuParam(CPU) {
    for (let index = 0; index < CPU.length; index++) {
        const element = CPU[index];
        console.log("parametry procesora to:  ", element)
    }
}
cpuParam(cpuArray);

//Jeszcze raz z pamięci napisz funkcję która pokaże tylko wartości liczbowe z tabeli cpuArray

function cpuDigit(CPU){
    for (let index = 0; index < CPU.length; index++) {
        const element = CPU[index];
    if (typeof element === "number"){
        console.log("tu są podane tylko wartości liczbowe z tabeli:  ", element)
    }
        
    }
}
cpuDigit(cpuArray);

//to samo co na górze tylko z objektu pocessor

function cpuDigitalParam(CPU) {
    for (let index = 0; index < CPU.length; index++) {
        const element = CPU[index];
        if (typeof element === "number") {
            console.log("Tu podane są wartości liczbowez objektu processor:   ", element)
            
        }
    }
    
}
cpuDigitalParam(processor);
// to na górze nie działa bo nie dałem fun.param

console.log("any " + "problem")
console.log(Number.isInteger(2017));