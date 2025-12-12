{
  /* ---------------------------- Array Loop Review --------------------------- */
  const studentsName = ["Khalesya", "Adhiena", "Yanto", "Asep"];

  // 1. for
  for (let i = 0; i < studentsName.length; i++) {
    console.log(studentsName[i]);
  }

  // 2. for of
  for (const el of studentsName) {
    console.log(el);
  }

  // for in
  for (const index in studentsName) {
    console.log(index);
    console.log(studentsName[index]);
  }

  /* ------------------------------- Object Loop ------------------------------ */
  const studentData = { name: "Ahsan Muhammad Sifr", age: 6, gender: "Male" };

  // for in
  for (const key in studentData) {
    console.log(studentData[key]);
  }
}
