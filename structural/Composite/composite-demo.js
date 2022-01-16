import { Cabinet, HardDrive, Memory, FloppyDisk } from './composite.js'

let cabinet = new Cabinet()
let h = new HardDrive()
let m = new Memory()
let f = new FloppyDisk()
cabinet.add(h).add(m).add(f)
console.log(cabinet.getPrice());