let totalCompra = 150000;
let esCliente = true;
let descuento = 0;

if (totalCompra > 100000){
    if (esCliente === true){
        descuento = totalCompra * 0.20;
    } else {
        descuento = totalCompra * 0.10;
    }
} else {
    if (esCliente === true) {
        descuento = totalCompra * 0.05;
    } else {
        descuento = 0;
    }
}
let totalPagar = totalCompra - descuento;
console.log ("Descuento aplicado: $" + descuento);
console.log ("Total a pagar: $" + totalPagar);