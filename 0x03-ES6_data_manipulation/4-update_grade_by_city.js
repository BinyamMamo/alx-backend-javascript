export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((st) => st.location === city)
    .map((st) => {
      const gradeObj = newGrades.find((item) => item.studentId === st.id);
      return gradeObj ? { ...st, grade: gradeObj.grade } : { ...st, grade: 'N/A' };
    });
}
