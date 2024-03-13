interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any; // Allow any additional attributes
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// Define an interface for the constructor of StudentClass
interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClass;
}

// Define an interface for the StudentClass
interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const firstInitial = firstName.charAt(0).toUpperCase();
	return `${firstInitial}. ${lastName}`;
};

// Implement the StudentClass
const StudentClass: StudentConstructor = class StudentClassImpl implements StudentClass {
	constructor(private firstName: string, private lastName: string) { }

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
};
