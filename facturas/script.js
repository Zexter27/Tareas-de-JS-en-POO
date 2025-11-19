/*
crear una clase facturas, metodo constructor que tendra los siguientes cambios
numero de factura
fecha
total factura, 
vector que tenga los productos, solo 3, aceite, sal, arroz,cantidad no importa,
dentro de la clase metodo que diga la cantidad que se vendio de productos
total de las ventas
que diga cual es la factura con mayor venta
*/
class Facturas {
  constructor(numeroFactura, fecha, totalFactura, productos) {
    this.numeroFactura = numeroFactura;
    this.fecha = fecha;
    this.totalFactura = totalFactura;
    this.productos = productos; // array de productos
  }

  // reduce sirve para reducir un array a un solo valor, en este caso sumamos la cantidad de cada producto
  cantidadVendida() {
    return this.productos.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  }

  totalVentas(facturas) {
    return facturas.reduce((total, factura) => total + factura.totalFactura, 0);
  }

  mayorVenta(facturas) {
    return facturas.reduce(
      (max, factura) =>
        factura.totalFactura > max.totalFactura ? factura : max,
      facturas[0]
    );
  }
}

// haremos 3 facturas, como objetos de la clase Facturas
// cada factura tiene un número, fecha, total y un array de productos
const factura_1 = new Facturas(1, "2025-03-04", 100, [
  { nombre: "aceite", cantidad: 1 },
  { nombre: "sal", cantidad: 2 },
  { nombre: "arroz", cantidad: 3 },
]);
const factura_2 = new Facturas(2, "2025-03-04", 200, [
  { nombre: "aceite", cantidad: 2 },
  { nombre: "sal", cantidad: 3 },
  { nombre: "arroz", cantidad: 4 },
]);
const factura_3 = new Facturas(3, "2025-03-04", 150, [
  { nombre: "aceite", cantidad: 3 },
  { nombre: "sal", cantidad: 1 },
  { nombre: "arroz", cantidad: 2 },
]);

const facturas = [factura_1, factura_2, factura_3];

console.log("Cantidad vendida en factura_1:", factura_1.cantidadVendida());
console.log("Total de ventas:", factura_1.totalVentas(facturas));

// guardamo la variable facturaMayor para mostrarla en el console.log
const facturaMayor = factura_1.mayorVenta(facturas);

// mostraremos todo en un solo console.log, las comillas invertidas ` se usan para concatenar strings y variables
// el .join sirve para unir los elementos de un array en un string, en este caso los productos

console.log(`
    Factura con mayor venta:
    - Número de factura: ${facturaMayor.numeroFactura}
    - Fecha: ${facturaMayor.fecha}
    - Total de la factura: ${facturaMayor.totalFactura}
    Productos:
    ${facturaMayor.productos
      .map((producto) => `  - ${producto.nombre}: ${producto.cantidad}`)
      .join("\n")}
    `);
// y el ${} se usa para mostrar variables dentro de las comillas invertidas
// todo estos comentarios los hago para acordarme de como funciona el código
