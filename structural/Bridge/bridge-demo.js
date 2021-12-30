import { AcrylicInk, AlcoholInk, EpsonPrinter, HPprinter } from './bridge.js'

let p1 = new EpsonPrinter(new AcrylicInk())
console.log(p1.print());
let p2 = new EpsonPrinter(new AlcoholInk())
console.log(p2.print());
let p3 = new HPprinter(new AlcoholInk())
console.log(p3.print())