export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => student.id + accumulator, 0);
}
