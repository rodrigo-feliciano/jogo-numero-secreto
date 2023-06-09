const elementtoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChutenaTela(chute)
    verificaSeOChutePossuiUmvalorValido(chute)
}

function exibeChutenaTela(chute) {
    elementtoChute.innerHTML = `
         <div>Voce disse<div/>
         <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())