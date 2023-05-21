function verificaSeOChutePossuiUmvalorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementtoChute.innerHTML += '<div>Valor invalido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementtoChute.innerHTML += `
        <div>Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>
        `
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
             <h2>Voce Acertou! </h2>
             <h3>O numero secreto era ${numeroSecreto}</h3>

             <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementtoChute.innerHTML += `
        <div>O numero secreto e menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementtoChute.innerHTML += `
        <div>O numero secreto e maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
