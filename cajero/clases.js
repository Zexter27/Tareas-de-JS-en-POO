class Persona {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola! mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

const persona1 = new Persona('mafe', 19) ;
persona1.saludar();
