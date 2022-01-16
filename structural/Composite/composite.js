class Equipment {
    getPrice() {
        return this.price || 0
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
}

class Composite extends Equipment {
    constructor() {
        super()
        this.equipment = []
    }
    add(equipment) {
        this.equipment.push(equipment)
        return this
    }
    getPrice() {
        let ans = 0
        for (let e of this.equipment) {
            ans += e.getPrice()
        }
        return ans
    }
}
// Cabinet 储物柜
export class Cabinet extends Composite {
    constructor() {
        super();
        this.setName('cabinet');
    }
}

// --- leafs ---
export class FloppyDisk extends Equipment {
    constructor() {
        super();
        this.setName('Floppy Disk');
        this.price = 70;
    }
}

export class HardDrive extends Equipment {
    constructor() {
        super();
        this.setName('Hard Drive');
        this.price = 250;
    }
}

export class Memory extends Equipment {
    constructor() {
        super();
        this.setName('Memory');
        this.price = 280;
    }
}