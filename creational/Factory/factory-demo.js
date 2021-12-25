import JobFactory from "./factory.js";
const person = JobFactory.create('coder')
console.log(person) // Job { job: 'coder', salary: '999k' }