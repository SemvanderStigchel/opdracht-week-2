export class Car {
    fuel;
    brand;

    constructor(brand, fuel) {
        this.brand = brand;
        console.log(`I'm a car`);
        this.fuel = fuel;
    }

    drive(){
        console.log(`vroom`);
        this.fuel --;
        console.log(this.fuel);
    }
}