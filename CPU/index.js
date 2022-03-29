let formInstance = document.getElementById("cpuform");
let formInstance1 = document.getElementById("model1");
const coreCountInstance = document.getElementById("coreCount");
const modelSelect = document.getElementById("model");

const cpus = [
  { name: "Select Model", cores: 4 },
  { name: "Ryzen 3", cores: 4, brand: "amd", thread: 12 },
  { name: "Ryzen 3 4100", cores: 4, thread: 8 },
  { name: "Ryzen 5 5500", cores: 4 },
  { name: "Ryzen 5 5600", cores: 4 },
  { name: "Ryzen 5 5600G", cores: 4 },
  { name: "Ryzen 7 5800X3D", cores: 8 },
  { name: "Ryzen 7 5700G", cores: 8 },
  { name: "Ryzen 9 5950X", cores: 12 },
  { name: ">Threadripper 1900X", cores: 12 },
  { name: ">Threadripper 3970X", cores: 12 },
  { name: ">Threadripper 3990X", cores: 12 },
  { name: "Core i3 10320", cores: 16, brand: "intel" },
  { name: "Core i5 11400", cores: 16 },
  { name: "Core i5 11600", cores: 32 },
  { name: "Core i5 11600FK", cores: 32 },
  { name: "Core i5 11600T", cores: 32 },
  { name: "Core i7 11700KF", cores: 4 },
  { name: "Core i7 10700K", cores: 4 },
  { name: "Core i9 10900KF", cores: 4 },
  { name: "Core i9 11900KF", cores: 4 },
  { name: "Xeon E-2186G", cores: 4 },
  { name: "Test2", cores: 4 },
  { name: "Test34", cores: 4 },
];

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addCpusOptions(itemsArr) {
  removeAllChildNodes(modelSelect);
  for (var i = 0; i < itemsArr.length; i++) {
    const elem = itemsArr[i];
    var opt = document.createElement("option");
    opt.value = elem.name;
    opt.innerHTML = elem.name;
    modelSelect.appendChild(opt);
  }
}

addCpusOptions(cpus);

function getCpusForCore(cpusArr, coreAmount = 4) {
  return cpusArr.filter((item) => item.cores === coreAmount);
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
