// inventario de una tienda

class Producto {
    constructor(id, nombre, categoria, precio){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio
    }
}

class Nodo {
    constructor(producto){
        this.data = producto; //objeto del producto
        this.next = null;
    }
}

class Inventario{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    agregarProducto(id, nombre, categoria, precio){
        const nuevoProducto = new Producto(id, nombre, categoria, precio)
        const nuevoNodo = new Nodo(nuevoProducto);


        if (this.head === null){
            this.head = nuevoNodo;

        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }

            current.next = nuevoNodo;
        }
        this.size++
    }

    buscarPorCategoria(categoria) {
        const resultados = [];
        let current = this.head;

        while (current !== null) {
            if (current.data.categoria === categoria) {
                resultados.push(current.data);
            }
            current = current.next;
        }
        return resultados;
    }

    productoMasCaro() {
        if (this.head === null) return null;

        let productoMayor = this.head.data;
        let current = this.head.next;

        while (current !== null) {
            if (current.data.precio > productoMayor.precio) {
                productoMayor = current.data;
            }
            current = current.next;
        }
        return productoMayor;
    }

    eliminarProducto(id) {
        if (this.head !== null && this.head.data.id === id) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
    
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.next.data.id === id) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
    
        return false; 
    }
}

const inventario1 = new Inventario();

// Agregando productos
inventario1.agregarProducto(1, "Arroz", "Alimentos", 2500);
inventario1.agregarProducto(2, "Leche", "Lácteos", 3000);
inventario1.agregarProducto(3, "Jabón", "Limpieza", 1800);
inventario1.agregarProducto(4, "Atún", "Alimentos", 4200);
inventario1.agregarProducto(5, "Cereal", "Desayunos", 3700);

// Ver inventario
console.log("=== INVENTARIO COMPLETO ===");
let nodoActual = inventario1.head;
while (nodoActual) {
    const prod = nodoActual.data;
    console.log(`${prod.id} | ${prod.nombre} | ${prod.categoria} | $${prod.precio}`);
    nodoActual = nodoActual.next;
}

// Probar buscarPorCategoria
console.log("\n=== ALIMENTOS ===");
console.log(inventario1.buscarPorCategoria("Alimentos"));

// Probar productoMasCaro
console.log("\n=== PRODUCTO MÁS CARO ===");
console.log(inventario1.productoMasCaro());

// Eliminar y verificar
inventario1.eliminarProducto(1);
console.log(`\n=== SIN ${current.data.producto} ===`);  
nodoActual = inventario1.head;
while (nodoActual) {
    console.log(nodoActual.data.nombre);
    nodoActual = nodoActual.next;
}