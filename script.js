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

window.onload = () => {
    ligarCamera(1);
};