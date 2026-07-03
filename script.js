const mapeamentoSons = {
    'q': { idAudio: 'tuco-get-out', idBotao: 'btn-q' },
    'w': { idAudio: 'funny_82hiegE', idBotao: 'btn-w' },
    'e': { idAudio: 'goffy-ahh-sound_D0537x0', idBotao: 'btn-e' },
    'r': { idAudio: 'long-brain-fart', idBotao: 'btn-r' },
    't': { idAudio: 'rizz-sound-effect', idBotao: 'btn-t' },
    'a': { idAudio: 'salma-de-palmas', idBotao: 'btn-a' },
    's': { idAudio: 'calma-ai-paizao', idBotao: 'btn-s' },
    'd': { idAudio: 'gay-meme', idBotao: 'btn-d' },
    'f': { idAudio: 'fahhhhh-3', idBotao: 'btn-f' },
    'g': { idAudio: 'fahhh_KcgAXfs', idBotao: 'btn-g' },
    'z': { idAudio: 'du-bist-gut-genug', idBotao: 'btn-z' },
    'x': { idAudio: 'ronaldo', idBotao: 'btn-x' },
    'c': { idAudio: 'faahh(slow)', idBotao: 'btn-c' },
    'v': { idAudio: 'foi-quando-gyro-finalmente-entendeu', idBotao: 'btn-v' },
    'b': { idAudio: 'toin-ion', idBotao: 'btn-b' },
    //separação show//
    'y': { idAudio: 'preto-cigano', idBotao: 'btn-y' },
    'u': { idAudio: 'pica-pau-bolinha-de-golfe', idBotao: 'btn-u' },
    'i': { idAudio: 'brutal-acabou-pro-beta-globo', idBotao: 'btn-i' },
    'o': { idAudio: 'michael-jackson-hee-hee', idBotao: 'btn-o' },
    'p': { idAudio: 'eu-finjo-que-nao-percebo-mas-tudo-esta-se ndo-obs', idBotao: 'btn-p' },
    'h': { idAudio: 'aiiii-aiii-aiiii', idBotao: 'btn-h' },
    'j': { idAudio: 'spiderman-meme-song', idBotao: 'btn-j' },
    'k': { idAudio: 'baby-laughing-meme', idBotao: 'btn-k' },
    'l': { idAudio: 'movie_1', idBotao: 'btn-l' },
    'ç': { idAudio: 'la-ele', idBotao: 'btn-ç' },
    'n': { idAudio: 'kids-saying-yay-sound-effect_3', idBotao: 'btn-n' },
    'm': { idAudio: 'tema-triste-toguro', idBotao: 'btn-m' },
    //separação show 2//
    '1': { idAudio: 'comedy-male-yelling-yee-ha-sound-effects-free-download-mp3cut', idBotao: 'btn-1' },
    '2': { idAudio: 'perfect-fart_Qosxm1J', idBotao: 'btn-2' },
    '3': { idAudio: 'mommy-asmr', idBotao: 'btn-3' },
    '4': { idAudio: 'enrique', idBotao: 'btn-4' },
    '5': { idAudio: 'the-rock-sound-effect', idBotao: 'btn-5' },
    '6': { idAudio: 'piccolo-aura', idBotao: 'btn-6' },

};

window.addEventListener('keydown', function(event) {
    const tecla = event.key.toLowerCase(); 

    //Se apertar a barra de espaço (ou 'escape')
    if (event.key === ' ' || event.key === 'Escape') { 
        pararTodosOsSons();
        return; // Para a execução aqui e não tenta tocar uma.
    }

    //Verificar se a tecla existe no mapeamento.
    if (mapeamentoSons[tecla]) {
        const somConfig = mapeamentoSons[tecla];
        tocarSom(somConfig.idAudio, somConfig.idBotao);
    }
});

function tocarSom(idAudio, idBotao) {
    const audio = document.getElementById(idAudio);
    const botao = document.getElementById(idBotao);

    if (audio) {
        audio.currentTime = 0; 
        audio.play();

        botao.classList.add('ativo');
        setTimeout(() => botao.classList.remove('ativo'), 200);
    }
}

//Procurar todas as tags <audio> da página e pausa elas
function pararTodosOsSons() {
    const todosOsAudios = document.querySelectorAll('audio');
    todosOsAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Resetar o áudio para o início. Tipo o Soundpad né pae, saudades do meu pc e do meu Dauntless...
    });
}
