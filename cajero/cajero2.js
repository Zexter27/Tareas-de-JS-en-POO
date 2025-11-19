// crear 4 objetos, [cajero] [incluir en un vector]
// nombre, total, {consignar, retirar, transferir}
// funciones, cuantos retiros hay, cual es la persona que tiene el mayor total
// cual fue la transaccion que mas se realizo


// get = traer, set = enviar
// < >
class Cajero {
    constructor(nombre, total, transacciones){
        this.nombre = nombre;
        this.total = total;
        this.transacciones = transacciones;

    }

    contarRetiros () {
        return this.transacciones.filter(transaccion => transaccion == "retirar").length;

    }

    transaccionMasRealizada () {
        const conteo = {consignar: 0, retirar: 0, transefir: 0};
        this.transacciones.forEach(transaccion => {
            if(conteo.hasOwnProperty(transaccion)) {
                conteo[transaccion]++;
            }
            
        });
        
        return Object.keys(conteo).reduce((a, b) => 
            conteo[a] > conteo[b] ? a : b
        );
    }

}

const cajero1 = new Cajero("Juan", 5000, ["consignar", "retirar", "consignar", "transferir"]);
const cajero2 = new Cajero("Maria", 10000, ["retirar", "retirar", "transferir", "consignar"]);
const cajero3 = new Cajero("Pedro", 7500, ["transferir", "consignar", "retirar", "transferir"]);
const cajero4 = new Cajero("Luisa", 12000, ["consignar", "retirar", "consignar", "retirar"]);

const cajeros = [cajero1, cajero2, cajero3, cajero4];

function personaMayorTotal (){
    return cajeros.reduce((max, cajero) => 
        cajero.total > max.total ? cajero : max
    );
}
// alt +96
cajeros.forEach(cajero => {
    console.log(`${cajero.nombre} tiene ${cajero.contarRetiros()} retiros `);
});

cajeros.forEach(cajero => {
    console.log(`La transacción más realizada por ${cajero.nombre} es: ${cajero.transaccionMasRealizada()}`);
});