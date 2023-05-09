export class Player {
    name;
    color;
    score = 0;

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    showName(){
        console.log(`My name is`);
        console.log(`%c ${this.name} `, `color: ${this.color}; font-weight: bold; font-size: 20px`);
    }

    addPoint(){
        this.score++;
        console.log(`${this.name}'s score is ${this.score}!`);
    }

    changeColor(newColor){
        this.color = newColor;
    }
}