// fetch() => network request. hasilnya adalah promise

const myPromise = new Promise((resolve, reject) => {
  //   return reject("Promise rejected!");
  //   return resolve("Promise resolved!");
  return resolve(
    new Promise((resolve, reject) => {
      return reject("Inner Promise rejected!");
      return resolve("Inner Promise Resolved!");
    })
  );
});
console.log(myPromise);

/* ----------------------------- dot then syntax ---------------------------- */
myPromise
  .then((data) => {
    return data;
  })
  .catch((error) => {
    return error;
  });

/* --------------------------- async await syntax --------------------------- */
// function funcName(){} => regular function
// async function funcName(){} => async function

async function myPromiseFunction() {
  try {
    const data = await myPromise;
    return data;
  } catch (error) {
    return error;
  }
}

// console.log(myPromiseFunction());

/* ---------------------------- promise is async ---------------------------- */
async function main() {
  console.log("-------------------------");
  console.log(1);
  console.log(2);
  console.log(await myPromiseFunction());
  console.log(3);
  console.log(4);
}

main();
