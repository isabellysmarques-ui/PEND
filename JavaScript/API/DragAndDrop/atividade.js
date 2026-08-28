let pontos = 0;
let restantes = 8;

let objetoArrastado = null;


// PEGAR OS OBJETOS
const objetos = document.querySelectorAll(".objeto");

// PEGAR AS LIXEIRAS
const lixeiras = document.querySelectorAll(".lixeira");


// =====================================
// ARRASTAR
// =====================================

objetos.forEach(function (objeto) {

    objeto.addEventListener("dragstart", function () {

        objetoArrastado = objeto;

        objeto.style.opacity = "0.5";

        document.getElementById("mensagem").innerText =
            "👉 Solte o objeto na lixeira correta!";

    });


    objeto.addEventListener("dragend", function () {

        objeto.style.opacity = "1";

    });

});


// =====================================
// LIXEIRAS
// =====================================

lixeiras.forEach(function (lixeira) {


    // Permite soltar
    lixeira.addEventListener("dragover", function (evento) {

        evento.preventDefault();

        lixeira.classList.add("destino");

    });


    // Saiu de cima
    lixeira.addEventListener("dragleave", function () {

        lixeira.classList.remove("destino");

    });


    // =====================================
    // SOLTOU
    // =====================================

    lixeira.addEventListener("drop", function (evento) {

        evento.preventDefault();

        lixeira.classList.remove("destino");


        // Verifica se existe objeto
        if (objetoArrastado == null) {
            return;
        }


        // Descobre os tipos
        let tipoObjeto =
            objetoArrastado.getAttribute("data-tipo");

        let tipoLixeira =
            lixeira.getAttribute("data-tipo");


        // =====================================
        // ACERTO
        // =====================================

        if (tipoObjeto == tipoLixeira) {

            pontos = pontos + 10;

            restantes = restantes - 1;


            // Atualiza placar
            document.getElementById("pontos").innerText =
                pontos;

            document.getElementById("restantes").innerText =
                restantes;


            // PEGA O CONTEÚDO DA LIXEIRA
            let lugar =
                lixeira.querySelector(".conteudo-lixeira");


            // =====================================
            // CRIA UMA CÓPIA DO OBJETO
            // =====================================

            let copia =
                objetoArrastado.cloneNode(true);


            // Desativa o arrastar da cópia
            copia.setAttribute("draggable", "false");


            // Adiciona a cópia dentro da lixeira
            lugar.appendChild(copia);


            // REMOVE O OBJETO ORIGINAL
            objetoArrastado.remove();


            // Mensagem
            document.getElementById("mensagem").innerText =
                "🎉 Muito bem! Você acertou! +10 pontos";


            // Limpa objeto selecionado
            objetoArrastado = null;


            // =====================================
            // VERIFICA VITÓRIA
            // =====================================

            if (restantes == 0) {

                document.getElementById("mensagem").innerText =
                    "🏆 PARABÉNS! VOCÊ RECICLOU TUDO!";

            }

        }


        // =====================================
        // ERRO
        // =====================================

        else {

            document.getElementById("mensagem").innerText =
                "❌ Essa não é a lixeira correta!";

        }

    });

});


// =====================================
// REINICIAR
// =====================================

function reiniciar() {

    location.reload();

}