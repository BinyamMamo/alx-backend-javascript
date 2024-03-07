export default class HolbertonCourse {
  constructor(name, length, students) {
    // set the attributes using the setter method
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array');
    }

    // Validate each student
    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
    this._students = newStudents;
  }
}
