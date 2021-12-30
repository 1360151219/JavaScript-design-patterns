// ES5 Prototype
// function Person(name) {
//     this.name = name
// }
// Person.prototype.getName = function () {
//     console.log(this.name)
// }
// export default Person

class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        console.log(this.name)
    }
}
export default Person