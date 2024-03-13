export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 34,
	location: "Dubai"
};

const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 28,
	location: "Abu Dhabi"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Add table headers
const thead = tbody.insertRow();
const th1 = thead.insertCell(0);
const th2 = thead.insertCell(1);
th1.textContent = "First Name";
th2.textContent = "Location";

// Append a new row for each student
studentsList.forEach((student) => {
	const row = tbody.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);
	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});

// Append the table to the body
table.appendChild(tbody);
document.body.appendChild(table);
