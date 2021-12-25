import JobProducer from "./abstract-factory.js";
const person = JobProducer('engineer')
console.log(person) // Job { job: 'engineer', salary: '10k' }