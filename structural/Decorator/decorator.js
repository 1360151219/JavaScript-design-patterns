// pasta 意大利面
class Pasta {
    constructor() {
        this.price = 0
    }
    getPrice() {
        return this.price
    }
}
// Panne 通心粉
class Panne extends Pasta {
    constructor() {
        super()
        this.price = 8
    }
}
class PastaDecorator extends Pasta {
    constructor(pasta) {
        super()
        this.pasta = pasta
    }
    getPrice() {
        return this.pasta.getPrice()
    }
}
// sauce 酱油
class SauceDecorator extends PastaDecorator {
    constructor(pasta) {
        super(pasta)
    }
    getPrice() {
        return super.getPrice() + 5
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(pasta) {
        super(pasta)
    }
    getPrice() {
        return super.getPrice() + 8
    }
}
export {
    Panne,
    CheeseDecorator,
    SauceDecorator
}