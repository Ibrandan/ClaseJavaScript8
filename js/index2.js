const payments = [];

function addElementToList() {
    let nombre = $('#nombre').val();
    let pago = $('#pago').val();

    payments.push({'nombre': nombre , 'pago': pago})

    console.log(payments);
}

function lastAddedToScreen(){
    let ultimo = payments[payments.length -1];
    $('#list-group').append(`<li> ${ultimo['nombre']}: $${ultimo['pago']}</li>`)
}

function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += parseFloat(array[i].pago);
    }
    return suma;
}

function showPaymentInHTML(){
    let resultadoArray =  sumarArray(payments);
    let divisionArray = resultadoArray / payments.length;
    let mostrarEnP = $('#total');
    mostrarEnP.text(`Total: $${resultadoArray}  A cada uno le toca aportar: $${divisionArray}`);
}

function repartir() {
    addElementToList();
    lastAddedToScreen();
   showPaymentInHTML();
};
