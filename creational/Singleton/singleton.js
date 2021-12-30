class Person {
    constructor() {
        if (typeof Person.instance === 'object') // 第2次开始为true
            return Person.instance
        Person.instance = this;
        return this;
    }
}
export default Person