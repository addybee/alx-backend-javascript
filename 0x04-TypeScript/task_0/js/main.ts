interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Thomas',
  age: 23,
  location: 'Abuja',
};

const student2: Student = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 22,
  location: 'Lagos',
};

const students: Student[] = [student1, student2];
