/*
SISTEMA DE CAJERO AUTOMATICO 
3 OBJETOS

NOMBRE
GENERO
VECTOR [RETIRO,CONSIGNACION,TRANSFERENCIA]

METODOS LISTA CAJERO
NOMBRE DE LA PERSONA CON MAS RETIROS
NOMBRE DE LA PERSONA CON MAS CONSIGNACIONES
NOMBRE DE LA PERSONA CON MAS TRANSFERENCIAS 
CUANTAS MUJERES CONSGNARON MAS DE DOS VECES
CUANTOS HOMBRES HICIERON MAS DE DOS TRASFERENCIAS
CUANTOS RETIROS (TOTAL)
CUANTAS CONSIGNACIONES(TOTAL)
CUANTAS TRANSFERENCIAS (TOTAL)
*/


class Nodo {
    constructor(nombre, genero, operaciones) {
        this.nombre = nombre;
        this.genero = genero;
        this.operaciones = operaciones; 
        this.siguiente = null;
    }
}

class ListaCajero {
    constructor() {
        this.cabeza = null;
    }

    agregarNodo(nombre, genero, operaciones) {
        const nuevoNodo = new Nodo(nombre, genero, operaciones);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    personaConMasRetiros() {
        let actual = this.cabeza;
        let maxRetiros = 0;
        let persona = null;

        while (actual) {
            if (actual.operaciones[0] > maxRetiros) {
                maxRetiros = actual.operaciones[0];
                persona = actual.nombre;
            }
            actual = actual.siguiente;
        }
        return persona;
    }

    personaConMasConsignaciones() {
        let actual = this.cabeza;
        let maxConsignaciones = 0;
        let persona = null;

        while (actual) {
            if (actual.operaciones[1] > maxConsignaciones) {
                maxConsignaciones = actual.operaciones[1];
                persona = actual.nombre;
            }
            actual = actual.siguiente;
        }
        return persona;
    }

    personaConMasTransferencias() {
        let actual = this.cabeza;
        let maxTransferencias = 0;
        let persona = null;

        while (actual) {
            if (actual.operaciones[2] > maxTransferencias) {
                maxTransferencias = actual.operaciones[2];
                persona = actual.nombre;
            }
            actual = actual.siguiente;
        }
        return persona;
    }

    mujeresConMasDeDosConsignaciones() {
        let actual = this.cabeza;
        let contador = 0;

        while (actual) {
            if (actual.genero === "F" && actual.operaciones[1] > 2) {
                contador++;
            }
            actual = actual.siguiente;
        }
        return contador;
    }

    hombresConMasDeDosTransferencias() {
        let actual = this.cabeza;
        let contador = 0;

        while (actual) {
            if (actual.genero === "M" && actual.operaciones[2] > 2) {
                contador++;
            }
            actual = actual.siguiente;
        }
        return contador;
    }

    totalRetiros() {
        let actual = this.cabeza;
        let total = 0;

        while (actual) {
            total += actual.operaciones[0];
            actual = actual.siguiente;
        }
        return total;
    }

    totalConsignaciones() {
        let actual = this.cabeza;
        let total = 0;

        while (actual) {
            total += actual.operaciones[1];
            actual = actual.siguiente;
        }
        return total;
    }

    totalTransferencias() {
        let actual = this.cabeza;
        let total = 0;

        while (actual) {
            total += actual.operaciones[2];
            actual = actual.siguiente;
        }
        return total;
    }
}

// ejemplo de uso
const lista = new ListaCajero();
lista.agregarNodo("manuel", "M", [2, 5, 4]);
lista.agregarNodo("mafe", "F", [2, 1, 5]);
lista.agregarNodo("laura", "F", [3, 1, 2]);
lista.agregarNodo("nathalia", "F", [1, 3, 4]);

console.log("la persona con más retiros fue:", lista.personaConMasRetiros());
console.log("la persona con más consignaciones fue:", lista.personaConMasConsignaciones());
console.log("la persona con más transacciones fue:", lista.personaConMasTransferencias());
console.log("total de mujeres con más de dos consignaciones:", lista.mujeresConMasDeDosConsignaciones());
console.log("total de hombres con más de dos transferencias:", lista.hombresConMasDeDosTransferencias());
console.log("retiros en total:", lista.totalRetiros());
console.log("consignaciones eb total:", lista.totalConsignaciones());
console.log("transferencias en total:", lista.totalTransferencias());