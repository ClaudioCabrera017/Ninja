class Ninja{
    constuctor(nombre,salud,velocidad,fuerza){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=velocidad;
        this.fuerza=fuerza;
    }
    sayName(){
        console.log(this.nombre);
    }
    showstats(){
        console.log(`El ${this.nombre},${this.salud}${this.velocidad}${this.fuerza}`);
    }
    drinksake(){
        this.salud=this.salud + 10;
        console.log(this.salud);
    }
}
let ninja1 = new Ninja("Naruto",100,3,3);
ninja1.sayName();
ninja1.showstats();
ninja1.drinksake();
