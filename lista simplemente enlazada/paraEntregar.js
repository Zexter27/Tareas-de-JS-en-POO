class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.puntero = null;
  }
}

class Estudiante {
  constructor(nombre, edad, genero, notas) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.notas = notas;
  }
}

class ListaEstudiantes {
  constructor() {
    this.inicio = null;
    this.size = 0;
  }

  agregar(dato) {
    const nuevoNodo = new Nodo(dato);
    if (!this.inicio) {
      this.inicio = nuevoNodo;
    } else {
      let aux = this.inicio;
      while (aux.puntero) {
        aux = aux.puntero;
      }
      aux.puntero = nuevoNodo;
    }
    this.size++;
  }

  imprimirLista() {
    let aux = this.inicio;
    let listaCompleta = "";

    while (aux) {
      listaCompleta += aux.dato.nombre;
      if (aux.puntero) {
        listaCompleta += " -> ";
      } else {
        listaCompleta += " -> Null";
      }
      aux = aux.puntero;
    }

    console.log(listaCompleta);
  }

  mayoredad() {
    let aux = this.inicio;
    let mayorEdad = 0;
    let estudianteMayor = null;

    while (aux) {
      if (aux.dato.edad > mayorEdad) {
        mayorEdad = aux.dato.edad;
        estudianteMayor = aux.dato;
      }
      aux = aux.puntero;
    }

    console.log(
      `el o la estudiante con mayor edad es ${estudianteMayor.nombre} con ${mayorEdad} años`
    );
  }

  prommujeres() {
    let aux = this.inicio;
    let contadorMujeres = 0;

    while (aux) {
      if (aux.dato.genero === "F") {
        contadorMujeres++;
      }
      aux = aux.puntero;
    }

    console.log(`hay ${contadorMujeres} mujeres en la lista`);
  }

  edadesentre() {
    let aux = this.inicio;
    let contador = 0;

    while (aux) {
      if (aux.dato.edad >= 18 && aux.dato.edad <= 25) {
        contador++;
      }
      aux = aux.puntero;
    }

    console.log(`hay ${contador} estudiantes entre 18-25 años`);
  }

  mejorprom() {
    let aux = this.inicio;
    let mejorPromedio = 0;
    let peorPromedio = Infinity;
    let estudianteMejor = null;
    let estudiantePeor = null;

    while (aux) {
      const promedio = aux.dato.notas.reduce(
        (acc, nota, index) => acc + nota * [0.3, 0.3, 0.4][index],
        0
      );

      if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        estudianteMejor = aux.dato;
      }

      if (promedio < peorPromedio) {
        peorPromedio = promedio;
        estudiantePeor = aux.dato;
      }

      aux = aux.puntero;
    }

    console.log(
      `el estudiante con el mejor promedio es ${
        estudianteMejor.nombre
      } con ${mejorPromedio.toFixed(2)}`
    );
    console.log(
      `el estudiante con el peor promedio es ${
        estudiantePeor.nombre
      } con ${peorPromedio.toFixed(2)}`
    );
  }
}

const listaEstudiantes = new ListaEstudiantes();

listaEstudiantes.agregar(new Estudiante("Manuel", 19, "H", [4, 4.2, 5]));
listaEstudiantes.agregar(new Estudiante("Gabriela", 17, "F", [1.3, 4.5, 3]));
listaEstudiantes.agregar(new Estudiante("Lina", 20, "F", [3.5, 4, 4]));

listaEstudiantes.imprimirLista();

listaEstudiantes.mayoredad();
listaEstudiantes.prommujeres();
listaEstudiantes.edadesentre();
listaEstudiantes.mejorprom();
