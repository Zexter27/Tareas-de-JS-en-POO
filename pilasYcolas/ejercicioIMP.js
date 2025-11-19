// colas, primer en entrar es el primero en salir
class Im{
    constructor(){
        this.fila = [];
    }
    // agregar a la fila
    agregar(valor){
        this.fila.push(valor);
    }
    // imprimir la primer tarea
    imprimir(){
        if(this.fila.length === 0){
            console.log("sin tareas para imprimir")
        }else{
            let nombre = this.fila.shift()
            
            console.log(`se esta imprimiendo la tarea ${nombre}\n Tareas restantes {${this.fila.join(", ") || 0}}`)
        }
    }
}
let im = new Im();
im.agregar("fisica");
im.agregar("matematicas");
im.agregar("sociales");
im.agregar("calculo");
im.imprimir();
im.imprimir();
im.imprimir();
im.imprimir();
im.imprimir();