let produtos = [];

function cadastrarProduto() {

    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let categoria = document.getElementById("categoria").value;
    let desconto = document.getElementById("desconto").value;

    if (nome === "" || preco === "" || categoria === "" || desconto === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let produto = {
        nome: nome,
        preco: preco,
        categoria: categoria,
        desconto: desconto
    };

    produtos.push(produto);

    console.log(produtos);

    let produtoTela = document.createElement("div");

    produtoTela.classList.add("produto");

    produtoTela.innerHTML = `
        <div class="info-produto">

            <h3>${produto.nome}</h3>

            <p>
                <strong>Preço:</strong> R$ ${produto.preco}
            </p>

            <p>
                <strong>Categoria:</strong> ${produto.categoria}
            </p>

            <p>
                <strong>Desconto:</strong> ${produto.desconto}%
            </p>

        </div>

        <button class="btn-excluir" onclick="excluirProduto(this)">
            Excluir
        </button>
    `;

    document.getElementById("produtos").appendChild(produtoTela);

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("desconto").value = "";
}


function excluirProduto(botao) {

    let produtoTela = botao.parentElement;

    produtoTela.remove();

    console.log(produtos);

}