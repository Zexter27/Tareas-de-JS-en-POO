class Libro {
    constructor(titulo, genero, estado) {
        this.titulo = titulo;
        this.genero = genero;
        this.estado = estado;
    }   
}

class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.libroPrestado = []; 
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
        this.usuarios = [];
        this.historialPrestamos = []; // Array para registrar todos los préstamos
    }

    prestarLibro(usuario, libro) {
        if (libro.estado == "disponible") {
            // Registrar el préstamo en el usuario
            usuario.libroPrestado.push(libro);
            libro.estado = "prestado";
            
            // Registrar en el historial de préstamos
            this.historialPrestamos.push({
                titulo: libro.titulo,
                usuario: usuario.nombre,
                fecha: new Date(), // Fecha actual del préstamo
                genero: libro.genero // Opcional: para futuros análisis
            });
            
            console.log(`El libro "${libro.titulo}" fue prestado a ${usuario.nombre}`);
        } else {
            console.log(`El libro "${libro.titulo}" no está disponible`);
        }
    }

    devolverLibro(usuario, libro) {
        const tieneLibro = usuario.libroPrestado.some(
            libroPrestado => libroPrestado.titulo === libro.titulo);
    
        if (tieneLibro) {
            usuario.libroPrestado = usuario.libroPrestado.filter(
                libroPrestado => libroPrestado.titulo !== libro.titulo);
            libro.estado = "disponible";
            console.log(`Devolución exitosa: ${libro.titulo}`);
        } else {
            console.log(`Error en devolución: Libro no prestado`);
        }
    }
         
    usuarioMasActivo() {
        let maxLibros = 0;
        let usuarioActivo = null;

        this.usuarios.forEach(usuario => {
            const totalLibros = usuario.libroPrestado.length;

            if (totalLibros > maxLibros){
                maxLibros = totalLibros;
                usuarioActivo = usuario;
            }
        });
        
        return usuarioActivo;
    }

    libroMasPopular() {
        if (this.historialPrestamos.length === 0) {
            return "No hay préstamos registrados";
        }

        const conteoLibros = {};
        
        // Contar cuántas veces ha sido prestado cada libro
        this.historialPrestamos.forEach(prestamo => {
            if (conteoLibros[prestamo.titulo]) {
                conteoLibros[prestamo.titulo]++;
            } else {
                conteoLibros[prestamo.titulo] = 1;
            }
        });

        let tituloMasPopular = '';
        let maxPrestamos = 0;

        // Encontrar el libro con más préstamos
        for (const titulo in conteoLibros) {
            if (conteoLibros[titulo] > maxPrestamos) {
                maxPrestamos = conteoLibros[titulo];
                tituloMasPopular = titulo;
            }
        }

        return tituloMasPopular || "No se determinó";
    }

    // Método adicional para obtener estadísticas por género
    librosPorGenero() {
        const conteoGeneros = {};
        
        this.historialPrestamos.forEach(prestamo => {
            if (conteoGeneros[prestamo.genero]) {
                conteoGeneros[prestamo.genero]++;
            } else {
                conteoGeneros[prestamo.genero] = 1;
            }
        });
        
        return conteoGeneros;
    }
}

const biblioteca = new Biblioteca();

// Agregar libros y usuarios
biblioteca.libros.push(
    new Libro("Cien años de soledad", "Realismo mágico", "disponible"),
    new Libro("El Principito", "Fábula", "disponible")
);

biblioteca.usuarios.push(
    new Usuario("María", 25),
    new Usuario("Carlos", 30)
);

// Realizar préstamos
biblioteca.prestarLibro(biblioteca.usuarios[0], biblioteca.libros[0]);
biblioteca.prestarLibro(biblioteca.usuarios[1], biblioteca.libros[0]);

// Obtener libro más popular
console.log("Libro más popular:", biblioteca.libroMasPopular());