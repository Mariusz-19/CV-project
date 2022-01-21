/*
 * 1. Napisz funkcje obliczającą pole trójkąta. funkcja przyjmuje 2 parametry (dlugosci boków)
 * daj zabezpieczenie zeby parametry (a, height) były typami number
 * wzór na pole trójkąta: 1/2 * a * h
 *
 * wynik wypisz w konsoli lub wrzuć do diva
 */
function calculateTriangleArea(a, height) {
  // tu wstaw swój kod
}

// Wywołanie:
const result1 = calculateTriangleArea(2, 3);
console.log("Pole trójkąta o dlugosci ", a, " i wysokosci: ",h, " to ", result1); //  3
const result2 = calculateTriangleArea(4, 6);
console.log("Pole trójkąta o dlugosci ", a, " i wysokosci: ",h, " to ", result2); //  12
const result3 = calculateTriangleArea(4, 4);
console.log("Pole trójkąta o dlugosci ", a, " i wysokosci: ",h, " to ", result3); //  8

// -----------------------------------------

/*
 * 2. Napisz funkcje która wyświetli tylko liczby parzyste z tablicy. Funkcja powinna przyjmować tablicę jako parametr
 * zadeklarowaną tablicę masz nizej pod zmienna numArray
 * wynik wypisz w konsoli
 */

// Dane do testowania:
const numArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const numArray2 = [
  2,2,2,2,2,2,3,2,0,4,4
];
const numArray3 = [
  1,1,1,2,4,6,10,100
];

function displayOddNumbers(param1) {
  // tu wstaw swój kod
}

// wywołanie
const resultArr1 = displayOddNumbers(numArray);
console.log("Liczby parzyste", resultArr1); // 2,4,6,8,10,12,14,16,18,20
const resultArr2 = displayOddNumbers(numArray2);
console.log("Liczby parzyste", resultArr2); // 2,2,2,2,2,2,2,0,4,4
const resultArr3 = displayOddNumbers(numArray3);
console.log("Liczby parzyste", resultArr3); //2,4,6,10,100


// --------------------------------------------

/*
 * 3. Stworz dwie funkcje: Potegowanie i Pierwiastkowanie. Zaloz ze liczba 2 jest liczbą startową
 *  - funkcja Potęgowanie ma zwiększać naszą liczbę o potęgę ^2 tzn. 2 -> 4 -> 16 -> 256 -> 65536
 *  - funkcja Pierwiastkowanie ma zmniejszać naszą liczbę o potęgę ^2 tzn. 65536 -> 256 -> 16 -> 4 -> 2 (uzyj do tego: Math.sqrt(4))
 *  - stworz dwa przyciski w HTML: Potegowanie i Pierwiastkowanie. Pod kazdy z nich podepnij odpowiednią funkcje
 *  - wynik zaprezentuj w divie z idkiem np. <div id="exerciseResult"></div>
 */

let startPoint = 2;
// tu musisz chwycic element html. Uzyj document.getElementById
// const exerciseResult = 

// potegowanie
function powerNumber(){
  // tu musisz zrobić update startPoint i wpisac do HTML
}

// pierwiastkowanie
function squareNumber(){
 // tu pisz kod
}


// --------------------------------------------

/*
 * 4. Stwórz funkcje która z podanej tablicy zwróci mi tylko elementy typu number
 * uzyj petli for i warunku: typeof === "number"
 */

// dane do testowania
const a1 = [1,2,"test", null, false, 5];
const a2 = [1,2,3,4, 3.14, new Date(), true];
const a3 = [1,2,3,4];
const a4 = [null, null, null, NaN];

function getNumbersFromArray(arr) {
  // tu pisz kod
}

// wywołanie: 
const a1Result = getNumbersFromArray(a1);
console.log("Tylko liczby: ", a1Result);
const a2Result = getNumbersFromArray(a2);
console.log("Tylko liczby: ", a2Result);
const a3Result = getNumbersFromArray(a3);
console.log("Tylko liczby: ", a3Result);
const a4Result = getNumbersFromArray(a4);
console.log("Tylko liczby: ", a4Result);