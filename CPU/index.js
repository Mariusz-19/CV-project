let formInstance = document.getElementById("cpuform")
let formInstance1 = document.getElementById("model1")

function handleformSubmit(event) {
    console.log(formInstance1.value)
    event.preventDefault();
}
formInstance.addEventListener("submit", handleformSubmit)
let model = document.getElementById("model");
