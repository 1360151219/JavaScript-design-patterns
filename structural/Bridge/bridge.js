class Ink {
    constructor(type) {
        this.type = type
    }
    get() {
        return this.type
    }
}
export class AcrylicInk extends Ink {
    constructor() {
        super('Acrylic-based')
    }
}
export class AlcoholInk extends Ink {
    constructor() {
        super('AlcoholInk-based')
    }
}
class Printer {
    constructor(ink) {
        this.ink = ink
    }
}
export class EpsonPrinter extends Printer {
    constructor(ink) {
        super(ink)
    }
    print() {
        return "EpsonPrinter,Ink:" + this.ink.get()
    }
}
export class HPprinter extends Printer {
    constructor(ink) {
        super(ink)
    }
    print() {
        return "HPprinter,Ink:" + this.ink.get()
    }
}

