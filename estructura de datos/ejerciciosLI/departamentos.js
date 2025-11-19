// Realizar la estructura de una lista doblemente enlazada con objetos
// SISTEMA DEPARTAMENTOS DE COLOMBIA (4 MUNICIPIOS)
// NOMBRE
// CANT HABITANTES
// PIB POR DEPARAMENTO

// METODOS
// COMO ORDENAR UNA LISTA (NOMBRE DE DEPARTAMENTO)
// PROMEDIO DE CANT DE HABITANTES
// CUAL TIENE EL MAYOR PIB
// CUAL TIENE EL MENOR PIB

class Departamentos {
    constructor(departamento) {
        this.departamento = departamento;
        this.municipios = [];
        this.prev = null;
        this.next = null;
    }
}

class Municipios {
    constructor(nombre, cantidad, pib) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.pib = pib;
    }
}

class listaDepartamentos {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    agregarDepartamento(departamento) {
        let nuevoDepartamento = new Departamentos(departamento);

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

    ordenarDepartamentos() {
        if (!this.head || !this.head.next) return;

        let actual = this.head;
        
        while (actual) {
            let siguiente = actual.next;
            while (siguiente) {
                if (actual.departamento > siguiente.departamento) {
                    let temp = actual.departamento;
                    actual.departamento = siguiente.departamento;
                    siguiente.departamento = temp;

                    let tempMunicipios = actual.municipios;
                    actual.municipios = siguiente.municipios;
                    siguiente.municipios = tempMunicipios;
                }

                siguiente = siguiente.next;
            }

            actual = actual.next;
        }
    }

    promedioHabitantes() {
        if (!this.head) return 0;
    
        let totalHabitantes = 0;
        let totalMunicipios = 0;
    
        let actual = this.head;
    
        while (actual) {
            actual.municipios.forEach((municipio) => {
                totalHabitantes += municipio.cantidad;
                totalMunicipios++;
            });
            actual = actual.next;
        }
    
        if (totalMunicipios > 0) {
            let promedio = totalHabitantes / totalMunicipios;
            return parseFloat(promedio.toFixed(1));
        } else {
            return 0;
        }
    }

    departamentoMayorPIB() {
        if (!this.head) return null;

        let actual = this.head;
        let mayorPIB = 0;
        let departamentoMayor = null;

        while (actual) {
            let pibTotal = actual.municipios.reduce(
                (acc, municipio) => acc + municipio.pib,
                0
            );
            if (pibTotal > mayorPIB) {
                mayorPIB = pibTotal;
                departamentoMayor = actual.departamento;
            }
            actual = actual.next;
        }

        return departamentoMayor;
    }

    departamentoMenorPIB() {
        if (!this.head) return null;

        let actual = this.head;
        let menorPIB = Infinity;
        let departamentoMenor = null;

        while (actual) {
            let pibTotal = actual.municipios.reduce(
                (acc, municipio) => acc + municipio.pib,
                0
            );
            if (pibTotal < menorPIB) {
                menorPIB = pibTotal;
                departamentoMenor = actual.departamento;
            }
            actual = actual.next;
        }
        return departamentoMenor;
    }

    mostrarDepartamentos() {
        let actual = this.head;
        let departamentos = [];
    
        while (actual) {
            let infoDepartamento = {
                departamento: actual.departamento,
                municipios: actual.municipios.map(municipio => ({
                    nombre: municipio.nombre,
                    cantidad: municipio.cantidad,
                    pib: municipio.pib
                }))
            };
            departamentos.push(infoDepartamento);
            actual = actual.next;
        }
    
        return departamentos;
    }
}



const lista = new listaDepartamentos();

lista.agregarDepartamento("Santander");
lista.agregarDepartamento("Boyaca");
lista.agregarDepartamento("Tolima");

// santander
lista.head.municipios.push(new Municipios("Piedecuesta", 160000, 12000));
lista.head.municipios.push(new Municipios("Bucaramanga", 580000, 45000));
lista.head.municipios.push(new Municipios("Girón", 250000, 15000));
lista.head.municipios.push(new Municipios("Floridablanca", 300000, 20000));

// boyaca
lista.head.next.municipios.push(new Municipios("Sogamoso", 120000, 15000));
lista.head.next.municipios.push(new Municipios("Duitama", 130000, 18000));
lista.head.next.municipios.push(new Municipios("Chiquinquirá", 100000, 10000));
lista.head.next.municipios.push(new Municipios("Tunja", 200000, 30000));

// tolima
lista.head.next.next.municipios.push(new Municipios("Melgar", 100000, 8000));
lista.head.next.next.municipios.push(new Municipios("Honda", 80000, 6000));
lista.head.next.next.municipios.push(new Municipios("Ibagué", 550000, 40000));
lista.head.next.next.municipios.push(new Municipios("Espinal", 150000, 12000));


console.log("departamentos sin organizar -- ", lista.mostrarDepartamentos()); // sin organizar

lista.ordenarDepartamentos();

console.log("departamentos organizados -- ", lista.mostrarDepartamentos());  // organizada

console.log("--------------------"); // un separador para uqe se vea organizado :D
console.log("promedio de habitantes --", lista.promedioHabitantes());
console.log("departamento con mayor P.I.B --", lista.departamentoMayorPIB());
console.log("departamento con menor P.I.B --", lista.departamentoMenorPIB());
console.log("--------------------");