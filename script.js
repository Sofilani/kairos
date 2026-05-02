let streams = {};

async function ligarCamera(numero) {
    const video = document.getElementById(`camera${numero}`);

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        streams[numero] = stream;
        video.srcObject = stream;

    } catch (erro) {
        alert("Erro: " + erro);
    }
}

function desligarCamera(numero) {
    if (streams[numero]) {
        streams[numero].getTracks().forEach(track => track.stop());
        document.getElementById(`camera${numero}`).srcObject = null;
    }
}

function expandir(bloco) {
    bloco.classList.add("expandido");
}

function voltar(event, botao) {
    event.stopPropagation();
    botao.parentElement.classList.remove("expandido");
}

window.onload = () => {
    ligarCamera(1);
};