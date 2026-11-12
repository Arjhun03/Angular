import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class Student {

  studentName: string = "Arjun";
  studentAge: number = 21;
  course: string = "Artificial Intelligence";

  displayDetails(): void {
    console.log("Student Name:", this.studentName);
    console.log("Student Age:", this.studentAge);
    console.log("Course:", this.course);
  }
}