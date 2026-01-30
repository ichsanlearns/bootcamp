/* ---------------------------- 1. Be consistent ---------------------------- */
// BAD ❌
function get_event(id: number) {}
function fetchEventById(eventId: number) {}

// GOOD ✔️
function getEvent(id: number) {}
function fetchEventById(eventId: number) {}

/* -------------------- 2. Meaningful names over comments ------------------- */
// BAD ❌
// check if seat are available
function check(a: number, b: number): boolean {
  return a - b > 0;
}

// GOOD ✔️
function hasAvaiableSeats(totalSeat: number, bookedSeats: number): boolean {
  return totalSeat > bookedSeats;
}

/* ---------------------- 3. Identation and code style ---------------------- */
// BAD ❌
// const isActive = true;
// const user = undefined;
// function doSomething() {}

// if (isActive) {
// if (user) {
// doSomething();
// }
// }

// GOOD ✔️
const isActive = true;
const user = undefined;
function doSomething() {}

if (isActive) {
  if (user) {
    doSomething();
  }
}

/* ------------------------ 4. Keep files/code small ------------------------ */
// BAD ❌
function createBooking(data: any) {
  // validate
  // calculate price
  // save to database
  // send email
}

// GOOD ✔️
function validateBooking(data: BookingInput) {}
function calculatePrice(data: BookingInput) {}
function saveBooking(data: BookingInput) {}
function sendEmail(data: BookingInput) {}

function createBooking(data: BookingInput) {
  validateBooking(data);
  const price = calculatePrice(data);
  saveBooking(data);
  sendEmail(data);
}

/* ---------------------------- 5. Pure Functions --------------------------- */
// Pure functions are function that:
// 1. Depends only on its inputs (params)
// 2. Does not change anything outside

// BAD ❌
let totalRevenue = 0;
function addRevenue(amount: number) {
  return (totalRevenue = totalRevenue + amount);
}

// GOOD ✔️
function calculateTotalRevenue(currentRevenue: number, amount: number) {
  return currentRevenue + amount;
}

/* ----------------------- 6. Organize code by feature ---------------------- */
// BAD ❌
/*
controllers/
    user.controller.ts
    event.controller.ts

services/
routes/
*/

// GOOD ✔️
/*
user/
    user.controller.ts
    user.service.ts
    user.route.ts

event/
    event.controller.ts
*/
