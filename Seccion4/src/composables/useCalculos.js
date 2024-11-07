export function useCalculos() {

    function calcularImpuesto(precio) {
        return precio * 0.21;

    }

    function calcularDescuento(precio) {
        return precio * 0.10;
    }

    return { calcularDescuento, calcularImpuesto }
}