function saludar(str, callback) {
    var saludo = "¡Hola " + str.toUpperCase() + "!";
    setTimeout(function() {
        callback(saludo);
    }, 4000);
};

function imprimirSaludo(saludo) {
    console.log(saludo);
}

saludar("Fernando", imprimirSaludo);
console.log('Final');