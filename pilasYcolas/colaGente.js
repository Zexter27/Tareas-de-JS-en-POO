class Cola{
    constructor(){
        this.personas = []
    }

    agregarPersona(cliente){
        this.personas.push(cliente) //push para añadir
        console.log(`${cliente} esta en cola`)
    }

    eliminarPersona(){
        if(!this.personas) console.log("la cola esta vacia");
        
        const atendido = this.personas.shift()
        console.log(`${atendido} ya fue atendid@`)
    }

    colaVacia() {
        return this.personas.length === 0
    }

    mostrarCola(){
        if(this.colaVacia()){
            console.log("la cola esta vacia")
        }else{
            console.log("clientes en cola: ", this.personas.join(", "));
            
        }
    }
}


const persona = new Cola()

persona.agregarPersona("laura")
persona.agregarPersona("mafe")
persona.agregarPersona("manuel")
persona.mostrarCola()
console.log("------------ --------------")

persona.eliminarPersona()
persona.mostrarCola()

console.log("------------ --------------")
persona.eliminarPersona()
persona.mostrarCola()


console.log("------------ --------------")
persona.eliminarPersona()
persona.mostrarCola()