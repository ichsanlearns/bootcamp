interface IUserAddress {
  street: string;
  city: string;
  country: string;
}

type TUserAddress = {
  street: string;
  city: string;
  country: string;
};

const userData1 = {
  firstName: "John",
  lastName: "Doe",
  age: 70,
  address: {
    street: "St. Flamingo",
    city: "Liverpool",
    country: "UK",
  },
  gender: "Male",
  email: "john@mail.com",
  password: "newpass",
  isVerified: false,
  printUserData: function () {
    return `My name is ${this.firstName} and i live in ${this.address.country}`;
  },
};

const userData2 = {
  firstName: "Angel",
  lastName: "Christian",
  age: 45,
  address: {
    street: "St. Wall Street",
    city: "Chicago",
    country: "USA",
  },
  gender: "Female",
  email: "angel@mail.com",
  password: "newpass",
  isVerified: true,
};

class User {
  firstName: string;
  lastName: String;
  age: number;
  address: IUserAddress;
  gender: string;
  email: string;
  password: string;
  isVerified: boolean;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: IUserAddress,
    gender: string,
    email: string,
    password: string,
    isVerified: boolean
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.gender = gender;
    this.email = email;
    this.password = password;
    this.isVerified = isVerified;
  }
  printUserData() {
    return `My name is ${this.firstName} and i live in ${this.address.country}`;
  }
}

/* ------------------------------- new keyword ------------------------------ */
// 1. Membuat object kosong
// 2. Menjalankan constructor
// 3. Mengikat this keyword ke object kosong yang baru dibuat
// 4. Me-return object yang sudah dibuat
const userData3 = new User(
  "Asep",
  "Saepudin",
  70,
  { street: "St. Asia Afrika", city: "Bandung", country: "indonesia" },
  "Male",
  "asep@mail.com",
  "newpass",
  true
);

console.log(userData3);
console.log(userData3.printUserData());
