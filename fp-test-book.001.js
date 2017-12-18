let enrollment = [
    {enrolled: 2, grade: 180},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89}
];


var totalGrades = 0;
var totalStudentsFound = 0;
for ( let i = 0; i < enrollment.length; i++) {

    let student  = enrollment [i];
    if (student !== null ){
        if (student.enrolled > 1){
            totalGrades += student.grade;
            totalStudentsFound++;
        }
    }
}

var average = totalGrades / totalStudentsFound;

return average;
