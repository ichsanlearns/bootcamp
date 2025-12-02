/* -------------------------------------------------------------------------- */
/*                                 Conditional                                */
/* -------------------------------------------------------------------------- */

const favoriteParty = "Demokrat";

/*
if => keyword untuk membuat kondisi
() => tempat menulis kondisi (sebuah perbandingan)
{} => tempat menulis kode ynag akan dijalankan ketika kondisinya benar
else {} => tempat menulis kode backup yang akan dijalankan HANYA jika kondisi di if-nya false
*/

/* ----------------------------------- if ----------------------------------- */

if (favoriteParty === "PDIP") {
  console.log("Merah");
} else if (favoriteParty === "Golkar") {
  console.log("Kuning");
} else if (favoriteParty === "Demokrat") {
  console.log("Biru");
} else {
  console.log("Hitam");
}

if (10 > 5) {
  console.log("Yes 10 > 5");
}

if (true) {
  console.log("Yes i'm true");
}

const randomName = "Anas Urbaningrum";
if (randomName) {
  console.log("I'm here");
}

const score = 0;
if (score) {
  console.log("Zero");
}

/* --------------------------------- switch case --------------------------------- */
const favoriteFruit = "Grape";

switch (favoriteFruit) {
  case "Banana":
    console.log("Yellow");
    break;
  case "Apple":
    console.log("Red");
    break;
  case "Melon":
    console.log("Green");
    break;
  default:
    console.log("Black");
}
