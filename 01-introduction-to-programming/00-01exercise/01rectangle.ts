{
  /* -------------------------------- 1 ------------------------------- */
  const length = 5;
  const width = 3;

  //   Rectangle Area
  const rectangleArea = length * width;
  console.log(`Rectangle area: ${rectangleArea}`);

  /* ------------------------------------ 2 ----------------------------------- */
  //   Rectangle Perimeter
  const rectanglePerimeter = length * 2 + width * 2;
  console.log(`Perimeter rectangle: ${rectanglePerimeter}`);

  /* --------------------------------- 3 --------------------------------- */
  const radius = 5;

  //Circle Diameter
  const circleDiameter = radius * 2;
  console.log(`Circle Diameter: ${circleDiameter}`);

  //   Circle Circumference
  const circleCircumference = 2 * (22 / 7) * 5;
  console.log(`Circle Circumference: ${circleCircumference}`);

  //   Circle Area
  const circleArea = (22 / 7) * 5 ** 2;
  console.log(`Area of a circle: ${circleArea}`);

  /* -------------------------------- 4 -------------------------------- */
  const a: number = 80;
  const b: number = 65;

  //   Angles Triangle
  const anglesTriangle: number = 180 - (a + b);
  console.log(`angles Triangle: ${anglesTriangle}`);

  /* ---------------------------------- 5 ---------------------------------- */
  const days: number = 400;

  // convert
  const year: number = days / 365;
  const month: number = (days % 365) / 30;
  const day: number = (days % 365) % 30;

  // days to years, months, and days
  console.log(
    `${Math.floor(year)} year, ${Math.floor(month)} month, ${day} day`
  );

  /* ------------------------------------ 6 ----------------------------------- */
  //   days difference
  const days1 = new Date("2025-12-5");
  const days2 = new Date("2027-10-15");
  // Convert to Milisecond
  const difference = days2.getTime() - days1.getTime();
  // Convert to day
  console.log(difference);
  const resultDifference = difference / 60 / 60 / 24 / 1000;
  console.log(`Days Difference: ${Math.floor(resultDifference)} days`);
}
