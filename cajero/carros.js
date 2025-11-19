class Coche {
    constructor(marca, modelo, año, velocidadActual){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.velocidadActual = 0
    }

    acelerar(velocidad){
        this.velocidadActual += this.velocidad
        console.log(`el carro acelero a ${this.velocidadActual} km/h`);
    }

    frenar() {
        this.velocidadActual = 0; // Establecer la velocidad a 0
        console.log("El carro se detuvo completamente.");
    }

    infoCarro(){
        return console.log(`Marca: ${this.marca} Modelo: ${this.modelo} del año ${this.año}`)
    }
}

const miCarro = new Coche('nissan', 'gtr', 2010 );

miCarro.acelerar(50);
miCarro.acelerar(30);
miCarro.frenar();
miCarro.infoCarro();