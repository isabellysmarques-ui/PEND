const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const mensagem = document.querySelector("#mensagem");

const url = "https://jsonplaceholder.typicode.com/users";

botao.addEventListener("click", buscarUsuarios);

async function buscarUsuarios() {

    resultado.innerHTML = "";
    mensagem.textContent = "Carregando dados...";

    try {

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        const dados = await resposta.json();

        mensagem.textContent = "Usuários encontrados: " + dados.length;

        dados.forEach(usuario => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <h2>${usuario.name}</h2>

                <p>
                    <strong>Usuário:</strong>
                    ${usuario.username}
                </p>

                <p>
                    <strong>E-mail:</strong>
                    ${usuario.email}
                </p>

                <p>
                    <strong>Telefone:</strong>
                    ${usuario.phone}
                </p>

                <p>
                    <strong>Cidade:</strong>
                    ${usuario.address.city}
                </p>

                <p>
                    <strong>Empresa:</strong>
                    ${usuario.company.name}
                </p>
            `;

            resultado.appendChild(card);

        });

    } catch (erro) {

        mensagem.textContent = "Erro: " + erro.message;

    }

}