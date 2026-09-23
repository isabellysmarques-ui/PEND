function localizar() {

    navigator.geolocation.getCurrentPosition(function(posicao) {

        document.getElementById("latitude").innerText =
            posicao.coords.latitude;

        document.getElementById("longitude").innerText =
            posicao.coords.longitude;

        document.getElementById("precisao").innerText =
            posicao.coords.accuracy + " metros";

    });

}


function abrirCamera() {

    navigator.mediaDevices.getUserMedia({
        video: true
    })

    .then(function(stream) {

        document.getElementById("camera").srcObject = stream;

    })

    .catch(function() {

        alert("Não foi possível acessar a câmera.");

    });

}


function tirarFoto() {

    const camera = document.getElementById("camera");
    const canvas = document.getElementById("canvas");
    const foto = document.getElementById("foto");

    const contexto = canvas.getContext("2d");

    contexto.drawImage(camera, 0, 0, 400, 300);

    foto.src = canvas.toDataURL("image/png");

}