const video = document.querySelector("#camera");
const foto = document.querySelector("#foto");
const botao = document.querySelector("#botao");
const canvas = document.querySelector("#canvas");

navigator.mediaDevices.getUserMedia({
    video:true, audio:true
})
.then(function(stream) { 
    video.srcObject = stream;
})
.catch(function(error) {
    console.log("Erro ao acessar a camera:", error);
});

botao.addEventListener("click", function() {


    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext('2d');

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");
});