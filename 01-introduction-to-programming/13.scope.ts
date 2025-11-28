// scope lv. 1

const widthArea = "1000m2";
console.log(widthArea);

var speed = "150 km/h";
console.log(speed);

{
  // scope lv. 2
  console.log(widthArea);

  const radius = "50 cm";
  console.log(radius);

  console.log(speed);

  var altitude = "2000 mdpl";
  console.log(altitude);
}

// console.log(radius);
console.log(altitude);

// const, let => variable yang dibuat akan memiliki block scope
// var => variable yang dibuat akan memiliki global scope
