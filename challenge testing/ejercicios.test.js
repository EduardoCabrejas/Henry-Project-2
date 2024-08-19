// carrito =  {
// products = [
//     {name: "producto1", price: 10 } [0]
//     {name: "producto2", price: 20 } [1]
// ],
// agregarProducto: function;
//    };
//! Asercion = contrastar/comparar lo escrito con lo esperado.

const CarritoCompra = require ('./index.js');

describe("Carrito de compras", () => {
    
    let carrito;
    beforeEach(() => {
        carrito = new CarritoCompra();
    })

    const producto1 = { name: "Producto1", price: 10 };
    const producto2 = { name: "Producto2", price: 20 };
    
    it("Carrito de compras debe ser una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
    expect(carrito instanceof CarritoCompra).toBe(true);
    });

    it("Carrito Compra inicia su propiedad 'products' con un array vacio", () => {
        expect(carrito.products).toEqual([]);
        expect(carrito.products.length).toBe(0);
        expect(Array.isArray(carrito.products)).toBe(true);
    })
    
    it("agregarProducto debe agregar 'products' al carrito", () => {
        carrito.agregarProducto(producto1);
        expect(carrito.products.length).toBe(1);
        expect(carrito.products[0]).toEqual(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.products.length).toBe(2);
        expect(carrito.products[1]).toEqual(producto2);
    })

    it("calcularTotal debe retornar el total de la compra del carrito", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(30);
    })

    it("aplicarDescuento retorna el total con el descuento aplicado", () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(100)).toBe(0);
        expect(carrito.aplicarDescuento(50)).toBe(15);
        expect(carrito.aplicarDescuento(20)).toBe(24);

    })

});