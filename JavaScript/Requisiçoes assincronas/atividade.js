const cep = document.getElementById("cep");
const buscar = document.getElementById("buscar");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("formulario");

// FUNÇÃO PARA CONSULTAR A API

async function buscarEndereco() {
    let valorCep = cep.value;
    valorCep = valorCep.replace(/\D/g, "");

    if (valorCep.length !== 8) {

        mensagem.innerText = "Digite um CEP válido.";

        mensagem.style.color = "red";

        return;
    }

    try {

        mensagem.innerText = "Consultando endereço...";
        mensagem.style.color = "black";


        const resposta = await fetch(
            `https://viacep.com.br/ws/${valorCep}/json/`
        );

        if (!resposta.ok) {
            throw new Error("Erro na requisição.");

        }


        const dados = await resposta.json();


        if (dados.erro) {
            mensagem.innerText = "CEP não encontrado.";
            mensagem.style.color = "red";
            return;
        }

        rua.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;


        mensagem.innerText = "Endereço encontrado!";
        mensagem.style.color = "green";

    }

    catch (erro) {

        console.log(erro);

        mensagem.innerText =
            "Não foi possível consultar o endereço.";

        mensagem.style.color = "red";

    }

}

buscar.addEventListener("click", buscarEndereco);

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Compra finalizada!");

});
