export default function getStudentIdsSum(students) {
  return students.reduce((sum, st) => sum + st.id, 0);
}
