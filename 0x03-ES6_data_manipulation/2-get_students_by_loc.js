export default function getStudentsByLocation(students, location) {
  return students.filter((st) => st.location === location);
}
