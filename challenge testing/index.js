class CarritoCompras {
    constructor()   {
        this.products = [];
    }

    agregarProducto(product) {
        this.products.push(product);
    }

    calcularTotal() {
        let total = 0;
        for (const product of this.products) {
            total += product.price;
        }
        return total;
    }

    aplicarDescuento(porcent) {
        const total = this.calcularTotal();
        const newTotal = total - (total * (porcent / 100));
        return newTotal;
    }
}

module.exports = CarritoCompras;