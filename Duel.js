class Card {
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power
        this.res = res
    }

    attack ( target ){
        target.res -= this.power
        console.log(`${this.name} has attacked ${target.name}`)
    }
}

const redBeltNinja = new Unit ("sneeky Jim", 3, 3, 4)
const blackBeltNinja = new Unit ("know it all Bill", 4, 5, 4)


class Effect extends Card {
    constructor(name, cost, text, changeStats, magnitude){
        super(name, cost)
        this.text = text
        this.changeStats = changeStats
        this.magnitude = magnitude
    }
    
    play( target ) {
        if( target instanceof Unit ) {
            target[this.changeStats] += this.magnitude
            console.log(`${this.name} changed ${this.changeStats} of ${target.name} by ${this.magnitude}`)
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const hardAlgo = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3)
const rejection = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2)
const programming = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2)


console.log("A flash of lightning has split a moonless night sky, before the light could disapate the first strike was made! The duel has begun.")
redBeltNinja.attack(blackBeltNinja)
hardAlgo.play(blackBeltNinja)
console.log(blackBeltNinja)
programming.play(redBeltNinja)
console.log(redBeltNinja)
rejection.play(redBeltNinja)
console.log(redBeltNinja)
console.log(blackBeltNinja)