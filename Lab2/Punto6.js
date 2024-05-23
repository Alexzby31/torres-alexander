function sumaMultiplos(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }
    return suma;
}

// Ejemplo de uso:
let resultado = sumaMultiplos(10);
console.log(resultado); // Imprimirá 23 (3 + 5 + 6 + 9)
