class ColaDeTareas {
    constructor() {
        this.cola = [];
    }

    agregarTarea(tarea) {
        this.cola.push(tarea);
        console.log(`Tarea agregada: ${tarea.nombre}, tipo: ${tarea.tipo}, prioridad: ${tarea.prioridad}`);
    }

    mostrarTareas() {
        if (this.cola.length === 0) {
            console.log(" No hay tareas en la cola.");
            return;
        }

        const ordenadas = this.cola.slice().sort((a, b) => a.prioridad - b.prioridad);
        console.log(" Lista de tareas ordenadas por prioridad:");
        ordenadas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.nombre} (${tarea.tipo}) - Prioridad: ${tarea.prioridad}`);
        });
    }

    imprimirTareaUrgente() {
        if (this.cola.length === 0) {
            console.log(" Todas las tareas han sido impresas.");
            return;
        }

        let indiceMasUrgente = 0;
        for (let i = 1; i < this.cola.length; i++) {
            if (this.cola[i].prioridad < this.cola[indiceMasUrgente].prioridad) {
                indiceMasUrgente = i;
            }
        }

        const tareaUrgente = this.cola.splice(indiceMasUrgente, 1)[0];
        console.log(` Imprimiendo tarea urgente: ${tareaUrgente.nombre} (${tareaUrgente.tipo}) - Prioridad: ${tareaUrgente.prioridad}`);
        this.mostrarTareas();
    }
}

const cola = new ColaDeTareas();


cola.agregarTarea({ nombre: "matematicas", tipo: "pdf", prioridad: 3 });
cola.agregarTarea({ nombre: "fisica", tipo: "docx", prioridad: 1 });
cola.agregarTarea({ nombre: "quimica", tipo: "pdf", prioridad: 2 });
console.log("------------------------------");

console.log("Tareas pendientes:");
cola.mostrarTareas();
console.log("------------------------------");

console.log("Imprimiendo tareas una por una:");
cola.imprimirTareaUrgente();
cola.imprimirTareaUrgente();
cola.imprimirTareaUrgente();
console.log("----------No hay mas tareas---------");

cola.imprimirTareaUrgente(); 
