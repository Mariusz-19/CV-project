/*
 * 1. Napisz funkcje obliczającą pole trójkąta. funkcja przyjmuje 2 parametry (dlugosci boków)
 * daj zabezpieczenie zeby parametry (a, height) były typami number
 * wzór na pole trójkąta: 1/2 * a * h
 *
 * wynik wypisz w konsoli lub wrzuć do diva
 */
function calculateTriangleArea(a, height) {
  // tu wstaw swój kod
  if (typeof a === "number" && typeof height === "number")
    {return 1/2*a*height;
    }
    return "invalid parameters types";
  
};

// Wywołanie:
const result1 = calculateTriangleArea(2, 3);
console.log("Pole trójkąta o dlugosci ", 2, " i wysokosci: ",3, " to ", result1); //  3
const result2 = calculateTriangleArea(4, 6);
console.log("Pole trójkąta o dlugosci ", 4, " i wysokosci: ",6, " to ", result2); //  12
const result3 = calculateTriangleArea(4, 4);
console.log("Pole trójkąta o dlugosci ", 4, " i wysokosci: ",4, " to ", result3); //  8


// -----------------------------------------

/*
 * 2. Napisz funkcje która wyświetli tylko liczby parzyste z tablicy. 
 * Funkcja powinna przyjmować tablicę jako parametr
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

function displayOddNumbers(arrayParam) {
  for (let index = 0; index < arrayParam.length; index++) {
    const element = arrayParam[index];
    if(element %2 !== 0) {
      console.log(element, " jest nieparzyste")
    } else {
      console.log(element, " jest parzyste")
    }
  }

  // tu wstaw swój kod
  //for(numArry >0; <20;) {
  //  if(numArray %2 !==0)
  //}
  //niewiem
};

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

const a = Math.pow(3, 2)
const b = 9;

// potegowanie
function powerNumber(x){
  if (typeof x !== "number")
  {
    return "invalid parameters types"
  };

console.log("wynik:", Math.pow(x, 2))
}

// pierwiastkowanie
function squareNumber(){
 // tu pisz kod
}

powerNumber(3) // 3^2
powerNumber(6) 

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

let getNumbersFromArray = (arr) => {
  // tu pisz kod
const result = []

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (typeof element === "number"){
      result.push(element)
    }
  }
  return result
}

const getNumbersFromArray = (arr) => arr.filter(item => typeof item === "number")

const nazwaF = () => {}

// wywołanie: 
const a1Result = getNumbersFromArray(a1);
console.log("Tylko liczby: ", a1Result); //[1,2,5]
const a2Result = getNumbersFromArray(a2);
console.log("Tylko liczby: ", a2Result);
const a3Result = getNumbersFromArray(a3);
console.log("Tylko liczby: ", a3Result);
const a4Result = getNumbersFromArray(a4);
console.log("Tylko liczby: ", a4Result);

