function JobProducer(type) {
    if (type === 'engineer') {
        return EngineerFactory(type)
    }
    else return CoderFactory(type)
}
function EngineerFactory(type) {
    return new Job(type, '10k')
}
function CoderFactory(type) {
    return new Job(type, '999k')
}
class Job {
    constructor(type, salary) {
        this.job = type
        this.salary = salary
    }
}
export default JobProducer