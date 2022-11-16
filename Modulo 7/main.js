const from = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEvalido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split('');
    return nomeComoArray.length >= 2;
}

form.addEventlistenner('submit', function(e){
    
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b> `;


    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('success-message');
        document.querySelector('success-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } 
    else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('error-message').style.display = 'block';
    }
} )

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaNome(nomeBeneficiario.value);

    if (!formEvalido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error-message');
        document.querySelector('error-message').style.display = 'none';
    }
});

