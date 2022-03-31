let formInstance = document.getElementById("cpuform");
const coreCountInstance = document.getElementById("coreCount");
const modelSelect = document.getElementById("model");
const brandSelect = document.getElementById("brand");

const cpus = [
  { name: "Select Model", brand: "Select Brand", cores: 4 },
  { name: "Ryzen 3 4100", brand: "amd", cores: 4, thread: 8, vga: "no", baseClk: 3.8, turboClk: 4.0 },
  { name: "Ryzen 5 5500", brand: "amd", cores: 6, thread: 12, vga: "no", baseClk: 3.6, turboClk: 4.2 },
  { name: "Ryzen 5 5600", brand: "amd", cores: 6, thread: 12, vga: "no", baseClk: 3.5, turboClk: 4.5 },
  { name: "Ryzen 5 5600G", brand: "amd", cores: 6, thread: 12, vga: "yes", baseClk: 3.9, turboClk: 4.4 },
  { name: "Ryzen 7 5800X3D", brand: "amd", cores: 8, thread: 16, vga: "no", baseClk: 3.4, turboClk: 4.5 },
  { name: "Ryzen 7 5700G", brand: "amd", cores: 8, thread: 16, vga: "yes", baseClk: 3.8, turboClk: 4.6 },
  { name: "Ryzen 9 5950X", brand: "amd", cores: 16, thread: 32, vga: "no", baseClk: 3.4, turboClk: 4.9 },
  { name: "Threadripper 1900X", brand: "amd", cores: 8, thread: 16, vga: "no", baseClk: 3.8, turboClk: 4.0  },
  { name: "Threadripper 3970X", brand: "amd", cores: 32, thread: 64, vga: "no", baseClk: 3.8, turboClk: 4.0 },
  { name: "Threadripper 3990X", brand: "amd", cores: 64, thread: 128, vga: "no", baseClk: 3.8, turboClk: 4.0 },
  { name: "Core i3 10320", brand: "intel", cores: 4, thread: 8, vga: "yes", baseClk: 3.8, turboClk: 4.6 },
  { name: "Core i5 11400", brand: "intel", cores: 6, thread: 12, vga: "yes", baseClk: 2.6, turboClk: 4.4 },
  { name: "Core i5 11600", brand: "intel", cores: 6,  thread: 12, vga: "yes", baseClk: 2.8, turboClk: 4.8 },
  { name: "Core i5 11600FK", brand: "intel", cores: 6, thread: 12, vga: "no", baseClk: 3.9, turboClk: 4.9 },
  { name: "Core i5 11600T", brand: "intel", cores: 6, thread: 12, vga: "yes", baseClk: 1.7, turboClk: 4.1 },
  { name: "Core i7 11700KF", brand: "intel", cores: 8, thread: 16, vga: "no", baseClk: 3.6, turboClk: 5.0 },
  { name: "Core i7 10700K", brand: "intel", cores: 8, thread: 16, vga: "yes", baseClk: 3.8, turboClk: 5.1 },
  { name: "Core i9 10900KF", brand: "intel", cores: 10, thread: 20, vga: "no", baseClk: 3.7, turboClk: 5.3 },
  { name: "Core i9 11900KF", brand: "intel", cores: 8, thread: 16, vga: "no", baseClk: 3.5, turboClk: 5.3 },
  { name: "Xeon E-2186G", brand: "intel", cores: 6, thread: 12, vga: "yes", baseClk: 3.8, turboClk: 4.7 },
  { name: "Test2", brand: "intel", cores: 4, thread: 8, vga: "no", baseClk: 3.8, turboClk: 4.0 },
  { name: "Test34", brand: "intel", cores: 4, thread: 8, vga: "no", baseClk: 3.8, turboClk: 4.0 },
];

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild); //i think this is function who clear all data from menu list
//and leave only first position, in this case "Select model, select Brand, etc..."
  }
}

/*This function write elements from array into a html file*/
 function addCpusOptions(itemsArr) {
  removeAllChildNodes(modelSelect);
  for (let i = 0; i < itemsArr.length; i++) {
    const elem = itemsArr[i];
    let opt = document.createElement("option");
    opt.value = elem.name;
    opt.innerHTML = elem.name;
    modelSelect.appendChild(opt);
  }
}

addCpusOptions(cpus); //This is start of this function whitch refers to array "cpus"

//this function find from array selected options
function getCpusForCore(cpusArr, coreAmount = 4) {
  const result=cpusArr.filter((item) => item.cores === coreAmount);
  console.log({result, cpusArr, coreAmount});
  return result;
}

// function handleFormSubmit(event) {
//   event.preventDefault(); // zapobega odswiezaniu strony
//   const result = getCpusForCore(cpus, parseInt(coreCountInstance.value));
//   //   console.log(result);
//   //   addCpusOptions(result);
// }

let model = document.getElementById("model");

function handleCoreChange(event) {
  const result = getCpusForCore(cpus, parseInt(event.target.value));
  addCpusOptions(result);
}

// Nasluchiwanie na zmiany na poszczegolnych elementach DOM
// Nasluchawanie formularza na zdarzenie "submit". Na klik button lub enter
// formInstance.addEventListener("submit", handleFormSubmit);
// Nasluchiwanie selecta dla Core'ów na zmianę wartości
coreCountInstance.addEventListener("change", handleCoreChange);

/*function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
*/
let brand = document.getElementById("brand");
/*
 function addBrandOptions(itemsArr) {
  removeAllChildNodes(brandSelect);
  for (var i = 0; i < itemsArr.length; i++) {
    const elem = itemsArr[i];
    var opt = document.createElement("option");
    opt.value = elem.brand;
    opt.innerHTML = elem.brand;
    modelSelect.appendChild(opt);
  }
}
addBrandOptions(cpus);

brandSelect.addEventListener("change", handleCoreChange);
*/

//create array for brands
const brands = ["Select brand", "Intel", "AMD"];
//get element brand from html (ID=brand) 
let br = document.getElementById("brand");
for (var i = 0; i < brands.length; i++) {
  const elem = brands[i]
let opt = document.createElement("option");
    opt.value = elem;
    opt.innerHTML = elem;
    br.appendChild(opt);
    //console.log(elem);
}

function handleBrandChange(event) {
  let result = cpus
if (event.target.value==="Intel") {
 result = cpus.filter(function(item){
    if (item.brand==="intel")
    return true
  })
  console.log(result);
} 
if (event.target.value==="AMD") {
  result = cpus.filter(function(item){
     if (item.brand==="amd")
     return true
   })
   console.log(result);
   
 } 
 addCpusOptions(result);
}



br.addEventListener("change", handleBrandChange);

