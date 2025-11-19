// SISTEMA DEPARTAMENTOS DE COLOMBIA
// NOMBRE DEPARTAMENTO
// PIB
// ALEATORIO (CANTIDAD DE HABITANTES 1.000.000-3.000.000)

// METODOS
// LISTA ENLAZADA DOBLE
// AGREGAR FINAL
// AGREGAR INICIO
// AGREGAR POS
// ELIMINAR POS
// IMPRIMIR
// - EL DEPARTAMENTO MAYOR PIB
// - EL PROMEDIO DE TOTAL HABITANTES
// - EL PROMEDIO DE PIB

class Departamentos {
    constructor(departamento, pib, habitantes) {
        this.departamento = departamento;
        this.pib = pib;
        this.habitantes = habitantes;
        this.prev = null;
        this.next = null;
    }
}

class listaDepartamentos {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    agregarFinal(departamento, pib, habitantes) {
        let nuevoDepartamento = new Departamentos(departamento, pib, habitantes);

        if (this.head === null) {
            this.head = nuevoDepartamento;
            this.tail = nuevoDepartamento;
        } else {
            this.tail.next = nuevoDepartamento;
            nuevoDepartamento.prev = this.tail;
            this.tail = nuevoDepartamento;
        }

        this.size++;
    }

    agregarInicio(departamento, pib, habitantes) {
        let nuevoDepartamento = new Departamentos(departamento, pib, habitantes);

        if (this.head === null) {
            this.head = nuevoDepartamento;
            this.tail = nuevoDepartamento;
        } else {
            nuevoDepartamento.next = this.head;
            this.head.prev = nuevoDepartamento;
            this.head = nuevoDepartamento;
        }

        this.size++;
    }

    agregarEnPos(departamento, pib, habitantes, posicion) {
        if (posicion < 0 || posicion > this.size) return;

        let nuevoDepartamento = new Departamentos(departamento, pib, habitantes);

        if (posicion === 0) {
            this.agregarInicio(departamento, pib, habitantes);
        } else if (posicion === this.size) {
            this.agregarFinal(departamento, pib, habitantes);
        } else {
            let actual = this.head;
            let contador = 0;

            while (contador < posicion - 1) {
                actual = actual.next;
                contador++;
            }

            nuevoDepartamento.next = actual.next;
            nuevoDepartamento.prev = actual;
            actual.next.prev = nuevoDepartamento;
            actual.next = nuevoDepartamento;

            this.size++;
        }
    }

    eliminarEnPos(posicion) {
        if (posicion < 0 || posicion >= this.size) return;

        if (posicion === 0) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
        } else if (posicion === this.size - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let actual = this.head;
            let contador = 0;

            while (contador < posicion) {
                actual = actual.next;
                contador++;
            }

            actual.prev.next = actual.next;
            actual.next.prev = actual.prev;
        }

        this.size--;
    }

    imprimir() {
        let actual = this.head;
        let resultado = [];

        while (actual) {
            resultado.push({
                departamento: actual.departamento,
                pib: actual.pib,
                habitantes: actual.habitantes,
            });
            actual = actual.next;
        }

        return resultado;
    }

    departamentoMayorPIB() {
        if (!this.head) return null;

        let actual = this.head;
        let mayorPIB = 0;
        let departamentoMayor = null;

        while (actual) {
            if (actual.pib > mayorPIB) {
                mayorPIB = actual.pib;
                departamentoMayor = actual.departamento;
            }
            actual = actual.next;
        }

        return departamentoMayor;
    }

    promedioHabitantes() {
        if (!this.head) return 0;

        let totalHabitantes = 0;
        let actual = this.head;

        while (actual) {
            totalHabitantes += actual.habitantes;
            actual = actual.next;
        }

        return parseFloat((totalHabitantes / this.size).toFixed(1));
    }

    promedioPIB() {
        if (!this.head) return 0;

        let totalPIB = 0;
        let actual = this.head;

        while (actual) {
            totalPIB += actual.pib;
            actual = actual.next;
        }

        return parseFloat((totalPIB / this.size).toFixed(1));
    }
}

const lista = new listaDepartamentos();

lista.agregarFinal("Caldas", 25197614, Math.floor(Math.random() * (3000000 - 1000000 + 1)) + 1000000);
lista.agregarFinal("Atlántico", 25275493, Math.floor(Math.random() * (3000000 - 1000000 + 1)) + 1000000);
lista.agregarFinal("Bogotá DC", 50009325, Math.floor(Math.random() * (3000000 - 1000000 + 1)) + 1000000);

console.log("Lista de departamentos:", lista.imprimir());

console.log("Departamento con mayor PIB:", lista.departamentoMayorPIB());

console.log("Promedio de habitantes:", lista.promedioHabitantes());

console.log("Promedio de PIB:", lista.promedioPIB());

lista.agregarEnPos("Huila", 18000000, Math.floor(Math.random() * (3000000 - 1000000 + 1)) + 1000000, 2);
console.log("Lista después de agregar en posición 2:", lista.imprimir());

lista.eliminarEnPos(1);
console.log("Lista después de eliminar en posición 1:", lista.imprimir());