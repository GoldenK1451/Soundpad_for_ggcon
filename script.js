// Mapeamento de teclas para as funções de som
window.addEventListener('keydown', function(event) {
    // Transforma em minúscula para evitar problemas com Caps Lock
    const tecla = event.key.toLowerCase(); 

    if (tecla === 'a') {
        tocarSom('som-meme1', 'btn-a');
    } 
    else if (tecla === 'b') {
        tocarSom('som-meme2', 'btn-b');
    }
});

// Função para tocar o som e dar um efeito visual no botão
function tocarSom(idAudio, idBotao) {
    const audio = document.getElementById(idAudio);
    const botao = document.getElementById(idBotao);

    if (audio) {
        audio.currentTime = 0; // Reinicia o som se já estiver tocando
        audio.play();

        // Efeito visual rápido no botão da tela
        botao.classList.add('ativo');
        setTimeout(() => botao.classList.remove('ativo'), 200);
    }
}
