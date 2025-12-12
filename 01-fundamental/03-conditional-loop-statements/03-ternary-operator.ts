const favColor = "red";

if (favColor === "red") {
  console.log("Glory Glory MU");
} else if (favColor === "blue") {
  console.log("Keep The Blue Flag Flying High");
} else {
  console.log("Indonesia Piala Dunia");
}

/*
condition ? code to be executed if condition true : code to be executed if condition false;
*/

favColor === "red"
  ? console.log("Glory Glory MU")
  : favColor === "blue"
  ? console.log("Keep The Blue Flag Flying High")
  : console.log("Indonesia Piala Dunia");
