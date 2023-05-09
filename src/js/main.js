import '../css/style.css'
import fishImage from '../images/fish.png'
import {Car} from './car';
import {Player} from "./player.js";

let a = new Car('Porsche', 4);
let b = new Car('Aston Martin', 6);

a.drive();
b.drive();

let mario = new Player('Mario', 'red');
mario.showName();
mario.addPoint();
mario.addPoint();

let luigi = new Player('Luigi', 'green');
luigi.showName();
luigi.changeColor('purple');
luigi.showName();
luigi.addPoint();

const div = document.createElement("div")
div.classList.add("fish")
document.body.appendChild(div)

const img = document.createElement("img")
img.src = fishImage
div.appendChild(img)
