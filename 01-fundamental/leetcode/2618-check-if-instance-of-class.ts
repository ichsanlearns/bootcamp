class Animal {
  kaki: number;
  berbulu: boolean;
  constructor(kaki: number, berbulu: boolean) {
    this.kaki = kaki;
    this.berbulu = berbulu;
  }
}

class Dog extends Animal {
  name: string;
  age: number;

  constructor(name: string, age: number, kaki: number, berbulu: boolean) {
    super(kaki, berbulu);
    this.name = name;
    this.age = age;
  }
}

const Dog1 = new Dog("Brui", 6, 4, true);

console.log(Dog1);

console.log(Dog1 instanceof Animal);

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (classFunction === Number && typeof obj === "number") return true;
  if (classFunction === String && typeof obj === "string") return true;
  if (classFunction === Boolean && typeof obj === "boolean") return true;

  return obj instanceof classFunction;
}
console.log(checkIfInstanceOf(5, Number));

console.log();
