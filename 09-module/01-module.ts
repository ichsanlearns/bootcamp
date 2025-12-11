import { printFullNameAndAddress, addTwo, subtractTwo } from "./02-module.ts";
import dibagiDua from "./02-module.ts";

const fullName = "John Doe";
const address = "Jalan Asia Afrika";

console.log(printFullNameAndAddress(fullName, address));
console.log(addTwo(12));
console.log(dibagiDua(6));

/* -------------------------------------------------------------------------- */
/*                             Named Export Import                            */
/* -------------------------------------------------------------------------- */
// 1. export bisa dilakukan berkali-kali di dalam satu file yang sama
// 2. import harus dilakukan menggunakan {}
// 3. name value yang di export harus sama dengan nama yang digunakan di import

/* -------------------------------------------------------------------------- */
/*                            Default Export Import                           */
/* -------------------------------------------------------------------------- */
// 1. export hanya bisa dilakukan SATU kali di dalam satu file yang sama
// 2. import tidak boleh menggunakan {}
// 3. name value yang di export default boleh berbeda dengan nama yang digunakan di import
