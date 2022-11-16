
let botaovalidar = document.getElementById('btnvalidar').onclick;

btnvalidar.addEventlistener('click', function(){
    let primeiroCampo = parseInt(document.getElementById("campoA").value);
    let segundoCampo = parseInt(document.getElementById("campoB").value);

    if (primeiroCampo === segundoCampo) {
        alert("Inválido! O Campo A é igual ao Campo B!");
    }
    
    if (primeiroCampo > segundoCampo) {
        alert("Inválido! O Campo A é maior que o Campo B!");
    }

    if (primeiroCampo < segundoCampo) {
        alert("Inválido! O Campo B é maior que o Campo A!");
    }
});