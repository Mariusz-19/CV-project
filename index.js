console.log("hello");

//deklarowanie zmiennych
var a = 5;
let b = 6;
const c = 7;
a = 6;
b = 7;
let d = "example";
let e = true;
let f = false;
let emptyArray = ["test", a, b, c, 9, 3.14, true];
let today = new Date();
let h = 3.14;
let obj = {
  a: 12,
  b: 13,
  c: d,
  d,
  e: emptyArray,
};
obj.c;
console.log(obj);
d.includes("ex");
console.log("result of incudes ", d.includes("ex"));

function calcutateSquare(sideA, sideB) {
  if (typeof sideA === "number" && typeof sideB === "number") {
    return sideA * sideB;
  }
  return "Invalid parameters types ";
}
const result = calcutateSquare(3, 7);
const result2 = calcutateSquare(5, 7);
const result3 = calcutateSquare(a, d);

console.log("wynik mnożenia ", result, result2, result3);

/*
 * Instrukcja warunkowa
 */
if (1 < 0) {
  console.log("jestem w if", 1 > 0);
}
