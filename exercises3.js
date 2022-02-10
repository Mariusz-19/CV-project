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

const arry1 = [2,5,6,3,9,2,1,4,6];

arry1.filter(value => value<=3);  //zapis strzałkowy

arry1.filter(function(value){
    if (value <=3){
    return true
    }
    return false
})

function textUp (text){ //to jest funkcja która zwraca poprawiony text jako string
    return text.toUpperCase()
}

function textUp2(text) { //to jest funkcja która nie zwraca nic bo nie ma return
    text.toUpperCase()
}


const txt = "teSt malYch wIelkicH liter";

function textDown(text) {
    return text.toLowerCase()
}

const lowerTxt = textDown(txt)
console.log(lowerTxt);

function replaceTxt(text) {
    return text.replaceAll("e", "!")
    
}
console.log(replaceTxt(lowerTxt));

function firstToUpper(ftu){
const gui = ftu.split(" ")
const result = [];
for (let index = 0; index < gui.length; index++) {
    const word = gui[index];
   const wrd = word[0].toUpperCase()+word.slice(1);
    result.push(wrd);
    
}

return result.join(" ")


}

console.log(firstToUpper(txt));

const oneliner = (txt) => txt.split(" ").map(x=>x[0].toUpperCase()+x.slice(1)).join(" ")
console.log(oneliner(txt))