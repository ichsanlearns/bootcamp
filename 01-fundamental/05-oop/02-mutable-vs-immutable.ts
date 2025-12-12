{
  // Mutable => Bisa diubah (Non Primitive Data Type)
  // Immutable => Tidak bisa diubah (Primitive Data Type)

  /* ------------------------ Mengisi ulang vs Mengubah ----------------------- */
  // Mengisi ulang
  // 1.
  let fullName = "Luhut Binsar";
  console.log(fullName);

  fullName = "Zulkifli Hasan";
  console.log(fullName);

  //   2.
  let arrayOfNums = [50, 60, 70, 80, 90];
  console.log(arrayOfNums);

  arrayOfNums = [10, 20, 30];
  console.log(arrayOfNums);

  //   Mengubah
  const arrayOfStrings = ["A", "B", "D"];
  console.log(arrayOfStrings);

  arrayOfStrings[2] = "C";
  console.log(arrayOfStrings);
}
