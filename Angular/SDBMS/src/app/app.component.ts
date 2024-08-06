import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './Model1/Student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project1';
  student: Student ;
  result:string;
  studentArr:Student[];
  flag:boolean;
  constructor(private service : StudentService){
    this.student = new Student();
    this.result="";
    this.studentArr=[];
    this.flag = false;
  }
  insertStudent(data: any){
    this.student.id= data.id;
    this.student.stuName = data.stuName; 
    this.student.stuAge= data.stuAge;
    this.student.stuEmail= data.stuEmail;
    this.result=this.service.insertStudent(this.student);
}
updateStudent(data: any){
  this.student.id= data.id;
  this.student.stuName = data.stuName;
  this.student.stuAge = data.stuAge; 
  this.student.stuEmail = data.stuEmail;
  this.result=this.service.updateStudent(this.student);
}
deleteStudent(data: any){
this.result=this.service.deleteStudent(data.id);
}

findStudent(data: any){
this.student=this.service.findStudent(data.id);
this.result=this.student.id+" "+this.student.stuName+" "+this.student.stuAge+" "+this.student.stuEmail;
}
findAllStudent(){
this.studentArr = this.service.findAllStudent();
this.flag=true;
}
}