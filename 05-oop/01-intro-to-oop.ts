/* -------------------------------------------------------------------------- */
/*                                   Object                                   */
/* -------------------------------------------------------------------------- */
// Kumpulan data yang memiliki keterkaitan

enum Department {
  IT,
  Marketing,
  Sales,
}

interface IEmployeeData {
  fullName: string;
  position: string;
  salary: number;
  department: Department;
}

const fullName: string = "Andhika Prakasa";
const position: string = "Staff";
const salary: number = 50_000_000;
const department: Department = Department.Marketing;

const employeeData1: {
  fullName: string;
  position: string;
  salary: number;
  department: Department;
} = {
  fullName: "Andhika Prakasa",
  position: "Staff",
  salary: 50_000_000,
  department: Department.Marketing,
};

const employeeData2: IEmployeeData = {
  fullName: "Siti Nurhaliza",
  position: "Manager",
  salary: 500_000_000,
  department: Department.Marketing,
};

const employeeData3: IEmployeeData = {
  fullName: "Budiman",
  position: "Staff",
  salary: 70_000_000,
  department: Department.IT,
};

/* -------------------------------------------------------------------------- */
/*                                    Class                                   */
/* -------------------------------------------------------------------------- */
// Blueprint untuk sebuah object

class Employee {
  fullName: string;
  position: string;
  salary: number;
  department: Department;

  //   fungsi yang akan mengisi nilai property object yang akan dibuat
  constructor(
    fullName: string,
    position: string,
    salary: number,
    department: Department
  ) {
    this.fullName = fullName;
    this.position = position;
    this.salary = salary;
    this.department = department;
  }
}

const employeeData4 = new Employee(
  "Fadhil Ramadhan",
  "Direktor",
  200_000_000,
  Department.Sales
);

const employeeData5 = new Employee(
  "Galih Pambudi",
  "Staff",
  25_000_000,
  Department.Sales
);

console.log(employeeData4);
console.log(employeeData5);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Jenis Case ------------------------------- */
// 1. camelCase
// 2. PascalCase
// 3. snake_case
// 4. kebab-case
