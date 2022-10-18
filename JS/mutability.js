const person = {
  age: 20,
  pName: "Vasja",
  clothesColor: {
    shirt: "black",
    trouses: "white",
  },
};

/* Три метода борьбы с мутабельностью: */
/* 1. Через создание строки JSON и последующее распаршивание ее - борется с мутабельностью вложенных объектов !!! */
let person2 = JSON.parse(JSON.stringify(person));
person2.pSurName = "Pupkin";
person2.clothesColor.trouses = "yellow";

console.log("JSON method:");
console.table(person);
console.table(person2);

/* 2. Через оператор spread или {...} - не борется с мутабельностью вложенных объектов */
person2 = { ...person };
person2.pSurName = "Pupkin";
person2.clothesColor.trouses = "yellow";

console.log("Spread method:");
console.table(person);
console.table(person2);

/* 3. Через метод класса Object.assign() - не борется с мутабельностью вложенных объектов */
person2 = Object.assign(person);
person2.pSurName = "Pupkin";
person2.clothesColor.trouses = "yellow";

console.log("Object.assign method:");
console.table(person);
console.table(person2);
