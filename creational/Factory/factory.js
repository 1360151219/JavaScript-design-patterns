class JobFactory {
    static create(type) {
        if (type === "engineer") {
            return new Job(type, '10k')
        } else if (type === 'coder') {
            return new Job(type, '999k')
        }
    }
}
class Job {
    constructor(type, salary) {
        this.job = type
        this.salary = salary
    }
}
export default JobFactory