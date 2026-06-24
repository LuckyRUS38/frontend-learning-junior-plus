const students = [
  { name: "Аня", grades: [80, 90, 70] },
  { name: "Боб", grades: [50, 40, 60] },
  { name: "Вера", grades: [95, 100, 90] },
  { name: "Гена", grades: [60, 55, 65] },
];

const averageGradeForStudents = [];

for (const student of students) {
  for (const [key, value] of Object.entries(student)) {
    if (key === "grades") {
      const averageGrade =
        value.reduce((acc, grade) => acc + grade, 0) / value.length;
      const newStudent = { name: student.name, averageGrade: averageGrade };
      averageGradeForStudents.push(newStudent);
    }
  }
}

console.log(averageGradeForStudents);
console.log(
  [...averageGradeForStudents].sort((a, b) => b.averageGrade - a.averageGrade),
);

const passed = averageGradeForStudents.filter(
  (student) => student.averageGrade >= 60,
);
console.log(passed);

console.log(
  [...averageGradeForStudents].sort(
    (a, b) => b.averageGrade - a.averageGrade,
  )[0],
);

let counter = 0;
for (const student of [...averageGradeForStudents].sort(
  (a, b) => b.averageGrade - a.averageGrade,
)) {
  counter++;
  console.log(
    `${counter}. ${student.name} - ${student.averageGrade.toFixed(1)}`,
  );
}
