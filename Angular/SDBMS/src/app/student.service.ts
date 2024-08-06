import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './Model1/Student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string;
  student : Student;
  studentArr:Student[];

  constructor(private http:HttpClient) {
    this.url="http://localhost:4091/student";
    this.student=new Student();
    this.studentArr=[];
  }
  insertStudent(student:Student){
    this.http.post<Student>(this.url,student).subscribe();
    return "Student Detailsadded";
  }
  updateStudent(student:Student){
    this.http.put<Student>(this.url+"/"+student.id,student).subscribe();
  return "Student DetailsUpdated";
  }
  deleteStudent(id : number){
    this.http.delete<Student>(this.url+"/"+ id).subscribe();
  return "Student DetailsDeleted";
  }
  findStudent(id: number){
    this.http.get<Student>(this.url+"/"+ id).subscribe(data => this.student = data);
    return this.student;
  }
  findAllStudent(){
    this.http.get<Student[]>(this.url).subscribe(data => this.studentArr = data);
    return this.studentArr;
  }
}
