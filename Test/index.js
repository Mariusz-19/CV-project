document.getElementById("button").onclick = 
function check(inputName = document.getElementById("Name")) {
    if (typeof inputName === "string") {
        document.getElementById("Elements").innerHTML = inputName;
    }
    else
    console.log("error");
}
