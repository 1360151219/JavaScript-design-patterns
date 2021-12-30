import { Student, ArtStudent, ArtStudentAdapter } from "./Adapter.js";

let p1 = new Student(90)
let p2 = new ArtStudentAdapter(new ArtStudent(80))
console.log(p1.getScore());
console.log(p2.getScore());
