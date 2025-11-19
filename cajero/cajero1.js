// crear 4 objetos, [cajero] [incluir en un vector]
// nombre, total, {consignar, retirar, transferir}
// funciones, cuantos retiros hay, cual es la persona que tiene el mayor total
// cual fue la transaccion que mas se realizo
class Cajero {
    constructor(nombre, total, transacciones) {
        this.nombre = nombre;
        this.total = total;
        this.transacciones = transacciones;
    }

    // Método para obtener un resumen de las transacciones
    datos() {
        const resumen = {
            nombre: this.nombre,
            total: this.total,
            consignar: 0,
            retirar: 0,
            transferir: 0,
            incorrectas: 0
        };

        // Recorrer las transacciones y contar cada tipo
        this.transacciones.forEach(transaccion => {
            switch (transaccion) {
                case "consignar":
                    resumen.consignar++;
                    break;
                case "retirar":
                    resumen.retirar++;
                    break;
                case "transferir":
                    resumen.transferir++;
                    break;
                default:
                    resumen.incorrectas++; // Transacciones desconocidas o vacías
                    break;
            }
        });

        return resumen;
    }

    // encontrar el cajero con el mayor total
    static totalMayor(cajeros) {
        return cajeros.reduce((max, cajero) => 
            cajero.total > max.total ? cajero : max
        );
    }

    //encontrar la transacción más usada
    transaccionMasUsada() {
        const conteo = { consignar: 0, retirar: 0, transferir: 0 };
        this.transacciones.forEach(transaccion => {
            if (conteo.hasOwnProperty(transaccion)) {
                conteo[transaccion]++;
            }
        });

        // Encontrar la transacción con el mayor conteo
        return Object.keys(conteo).reduce((a, b) => 
            conteo[a] > conteo[b] ? a : b
        );
    }
}

// Crear instancias de Cajero
const cajero1 = new Cajero("Cajero A", 10000, ["consignar", "retirar", "consignar", "transferir", "retirar"]);
const cajero2 = new Cajero("Cajero B", 15000, ["retirar", "retirar", "transferir", "consignar", ""]);
const cajero3 = new Cajero("Cajero C", 20000, ["transferir", "consignar", "fantasma", "retirar", "transferir"]);

// Mostrar información de cada cajero
console.log("Resumen Cajero 1:", cajero1.datos());
console.log("Resumen Cajero 2:", cajero2.datos());
console.log("Resumen Cajero 3:", cajero3.datos());

// Determinar el cajero con el mayor total
const cajeros = [cajero1, cajero2, cajero3];
const cajeroMayor = Cajero.totalMayor(cajeros);
console.log(`El cajero con el mayor total es ${cajeroMayor.nombre} con $${cajeroMayor.total}`);

// Mostrar la transacción más usada por cada cajero
console.log(`Transacción más usada en ${cajero1.nombre}:`, cajero1.transaccionMasUsada());
console.log(`Transacción más usada en ${cajero2.nombre}:`, cajero2.transaccionMasUsada());
console.log(`Transacción más usada en ${cajero3.nombre}:`, cajero3.transaccionMasUsada());