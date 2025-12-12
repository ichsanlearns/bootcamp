/*
const objectName = {
    propertyName {key}: propertyValue {value}
    name: "John",
    age: 70,
    favoritePlaylist: ["Indonesia Raya", "Garam Madu"],
    address: {
        street: "Jalan Asia Afrika",
        city: "Bandung",
        province: "Jawa Barat"
    }
}
*/
interface IUserData {
  name: string;
  age: number;
  favoritePlaylist?: string[];
  address: {
    street: string;
    city: string;
    province: string;
  };
  gender?: string;
  printUserData: () => string;
}

const userData: IUserData = {
  name: "John",
  age: 70,
  favoritePlaylist: ["Indonesia Raya", "Garam Madu"],
  address: {
    street: "Jalan Asia Afrika",
    city: "Bandung",
    province: "Jawa Barat",
  },
  printUserData: function () {
    return `Halo, Namaku ${this.name}, dan umurku ${this.age}, dan aku tinggal di ${this.address.city}`;
  },
};

console.log(userData.name);
console.log(userData.favoritePlaylist?.[1]);
console.log(userData.address.city);
console.log(userData.printUserData());

/* ---------------------- add, delete, & edit property ---------------------- */
console.log(userData);

// add
userData.gender = "Male";
console.log(userData);

// delete
delete userData.favoritePlaylist;
console.log(userData);

// edit
userData.name = "Christian";
console.log(userData);

const studentData = {
  name: "Aldo",
  class: "7A",
};

/* ---------------------------- Optional Chaining --------------------------- */
// ?

console.log(studentData);
console.log(studentData.name);
// console.log(studentData.address);
// console.log(studentData.address?.city);

/* ------------------------- Object Built-in Methods ------------------------ */
// Object.values => Untuk mengambil values dari sebuah object dan diletakkan di sebuah array
console.log(userData);
const userDataValues = Object.values(userData);
console.log(userDataValues);
console.log(userDataValues[0]);
console.log(userDataValues[1]);
console.log(userDataValues[2]);

// Object.keys => Untuk mengambil keys dari sebuah object dan diletakkan disebuah array
const userDataKeys = Object.keys(userData);
console.log(userDataKeys);

// Object.entries
const userDataEntries = Object.entries(userData);

console.log(userDataEntries);

// 2. Instance Methods
// .hasOwnProperty() => Punya property yang dicari atau tidak
console.log(userData.hasOwnProperty("name"));
console.log(userData.hasOwnProperty("kelas"));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const arrayOfNums = [1, 2, 3];

// Instance Methods
arrayOfNums.filter(() => {});

// Static Methods
Array.isArray(arrayOfNums);
