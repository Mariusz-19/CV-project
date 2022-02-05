// true values
/**
 * true
 * "false"
 * []
 * [false]
 * [undefined, fasle, "", 0]
 * -1,
 * 1,
 * 100,
 * 3.12
 * {},
 * { a: "test" }
 */

if ({}) {
  console.log("ta wartosc jest true");
}

// false values
/**
 * false
 * null
 * undefined
 * ""
 * NaN
 * 0
 */

if (!false) {
  console.log("ta wartosc jest false");
}

// -- obiekty js

const person = {
  name: "Kornel",
  secondName: "Szaltanowicz",
  age: null,
  hairColor: undefined,
  age: "",
};

// odwołania do pól obiektów
console.log("Name: ", person.name);
console.log("Name: ", person["name"]);

// Wbudowane metody obiektów np:
const objectKeys = Object.keys(person);
console.log("Zwraca wlasciwosci obiektu jako tablica: ", objectKeys);

const objectValues = Object.values(person);
console.log("Zwraca wartosci obiektu jako tablica: ", objectValues);

const obj1 = {
  age: 7,
  color: "red",
  name: "Mruczek",
};

const obj2 = {
  age: 4,
  color: "blue",
  name: "Mruczek",
  secondName: "Kłamczuszek",
  age: 5,
};

const a = { ...obj1, ...obj2 };

const aTab = [1, 2, 3];
const bTab = [1, 2, 3];

const cTab = [...aTab, ...bTab]; // [1,2,3,1,2,3]

const tom = {
  //pole/właściwość: wartość
  // field/property: value 
  age: 23,
  name: "Tomasz",
};

// sprawdzanie czy obiekt ma jakieś pole/właściwość
tom.hasOwnProperty("age"); / // zwraca true | false

console.log("Ma wzrost", tom.hasOwnProperty("age"));
console.log("Wzrost Tomasza", tom.height);
