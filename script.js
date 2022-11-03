class Ninja{
    nombre ="";
    vida = 100;
    velocidad = 3;
    fuerza = 3;

    sayName() {
        console.log(`El nombre de mi ninja es ${this.nombre}`)
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}, vida: ${this.vida}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`)
    }

    drinkSake(){
        for(let i = 1; i <= this.nombre.length; i++){
            this.vida += 10
        }
        console.log(`Ahora mi ninja tiene ${this.vida} de vida`);
    }
}

let ninja1 = new Ninja()
ninja1.nombre = "RamenMan"

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
