// This code calculate percentages for 5 subjects 
// Subjects: Maths, Physics, Chemistry, English, Biology

// Student Detail
let StudentId = "877DNSKJ";

// Total Marks
let MaxMarks = 500;

// Students Marks
let MathScore = 85;
let PhysicsScore = 97;
let ChemistryScore = 35;
let EnglishScore = 55;
let BiologyScore = 77;

let FinalResult = ( MathScore + PhysicsScore + ChemistryScore + EnglishScore + BiologyScore )

let ResultStatement = "Student with Id " + '' +  StudentId + '' + " obtained percentage = " + (FinalResult/ MaxMarks) * 100 + "%";

console.log(ResultStatement);
