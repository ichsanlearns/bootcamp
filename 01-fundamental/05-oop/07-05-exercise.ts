function convertBirthdateToAge(date) {
  const today = new Date();
  const age = Math.floor(
    (today.getTime() - date.getTime()) / (60 * 60 * 24 * 1000 * 365)
  );
  return age;
}
function calculateStudentData(students) {
  const scoreData = [];
  const ageData = [];
  let sumScore = 0;
  let sumAge = 0;
  for (const student of students) {
    scoreData.push(student.score);
    sumScore += student.score;
    const age = convertBirthdateToAge(student.age);
    ageData.push(age);
    sumAge += age;
  }
  return {
    score: {
      highest: Math.max(...scoreData),
      lowest: Math.min(...scoreData),
      average: sumScore / scoreData.length,
    },
    age: {
      highest: Math.max(...ageData),
      lowest: Math.min(...ageData),
      average: sumAge / ageData.length,
    },
  };
}
const students = [
  {
    name: "budi",
    email: "budi@gmail.com",
    age: new Date("2020-01-01"),
    score: 42,
  },
  {
    name: "sara",
    email: "sara@gmail.com",
    age: new Date("2000-01-01"),
    score: 77,
  },
  {
    name: "john",
    email: "john@gmail.com",
    age: new Date("1991-01-01"),
    score: 82,
  },
];
