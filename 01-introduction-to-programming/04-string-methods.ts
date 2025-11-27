/* ---------------------------------- Slice --------------------------------- */
const message = "Selamat pagi teman-teman yang berbahagia";
console.log(message.slice(2, 5));

console.log("Hello guys!".slice(6));

/* ---------------------------------- Trim ---------------------------------- */
// Membersihkan/menghapus whitespace
const fullName = "  Purwa hartono  ";
console.log(fullName);
console.log(fullName.trim());

console.log(" purwa.hartono@mail.com".trim());

/* ------------------------------- toLowerCase + toUpperCase ------------------------------ */
const username = "MuhaMMaDIcHSAnudin";
console.log(username.toLowerCase());
console.log(username.toUpperCase());

/* --------------------------------- replace + replaceAll -------------------------------- */
const secretMessage =
  "This is a very secret message you cannot see this secret";

console.log(secretMessage.replace("secret", "***"));
console.log(secretMessage.replaceAll("secret", "***"));
