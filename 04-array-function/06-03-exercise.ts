/* ------------------------------------ 1 ----------------------------------- */
{
  function getPrimitives(arr: any[]) {
    const result: any[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "object") {
        result.push(arr[i]);
      }
    }

    return result;
  }

  let arr = [1, [], undefined, {}, "string", {}, []];
  console.log(getPrimitives(arr));
}
/* ------------------------------------ 2 ----------------------------------- */
{
  let arr: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

  function sumDuplicate(arr: number[]) {
    let total: number = 0;
    let duplicate: number = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let y = 1; y < arr.length - 1; y++) {
        if (arr[i] === arr[y]) {
          duplicate = arr[i];
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === duplicate) {
        total += arr[i];
      }
    }
    console.log(total);

    return total;
  }

  console.log(sumDuplicate(arr));
}

/* ------------------------------------ 3 ----------------------------------- */
function rockPaperScissor(player: string) {
  const choices = ["rock", "paper", "scissor"];

  // komputer memilih secara random
  const computer = choices[Math.floor(Math.random() * 3)];

  console.log("Player :", player);
  console.log("Computer :", computer);

  // kondisi menang
  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "Win";
  }

  // jika sama -> draw
  if (player === computer) {
    return "Draw";
  }

  // selain itu, kalah
  return "Lose";
}

console.log(rockPaperScissor("rock"));
