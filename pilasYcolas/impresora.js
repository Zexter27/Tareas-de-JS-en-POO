class Cola{
    constructor(){
        this.impresora = []
    }

    agregarImpresion(tarea){
        this.impresora.push(tarea)
        console.log(`${tarea} esta en cola de impresion`)
    }

    eliminarImpresion(){
        if(!this.impresora) return ("la cola de impresion esta vacia");
        
        let colaImpresion = this.impresora.shift()
        console.log(`${colaImpresion} fue eliminado de la cola`)
    }

    colaVacia(){
        return this.impresora.length === 0
    }

    mostrarTareas(){
        if(!this.impresora) return ("la cola de impresion esta vacia");

        console.log("lista de tareas: ", this.impresora.join(", "))
    }
}

const nuevaTarea = new Cola()

nuevaTarea.agregarImpresion(1)
nuevaTarea.agregarImpresion(2)
nuevaTarea.agregarImpresion(3)
nuevaTarea.agregarImpresion(4)
nuevaTarea.agregarImpresion(5)
nuevaTarea.mostrarTareas()
console.log("----------------")

nuevaTarea.eliminarImpresion()
nuevaTarea.eliminarImpresion()
nuevaTarea.mostrarTareas()
console.log("----------------")