class Ninja {
    constructor(name) {
        this.speed = 3;
        this.strength = 3;
        this.health = 10;
        this.name = name;
        
    }
    sayName() {
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${ this.name }, Strength:  ${this.strength}, Speed: ${ this.speed }, Health: ${this.health}.`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} DRANK SOME SAKE!!!`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
