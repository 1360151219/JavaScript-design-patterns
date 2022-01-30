import { SauceDecorator, CheeseDecorator, Panne } from "./decorator.js";
let panne = new Panne()
let saucePanne = new SauceDecorator(panne)
let cheesePanne = new CheeseDecorator(panne)
console.log(saucePanne.getPrice());
console.log(cheesePanne.getPrice());