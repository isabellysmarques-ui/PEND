class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }

    aplicarDesconto() {

        const valorDesconto = this.preco * (this.desconto / 100);

        return this.preco - valorDesconto;

    }

    exibir() {

        const resultado = document.querySelector("#resultado");

        const precoComDesconto = this.aplicarDesconto();

        resultado.innerHTML = `
            <div>
                <h2>Produto cadastrado</h2>

                <p><strong>Nome:</strong> ${this.nome}</p>

                <p><strong>Preço original:</strong> 
                    R$ ${this.preco.toFixed(2)}
                </p>

                <p><strong>Categoria:</strong> ${this.categoria}</p>

                <p><strong>Desconto:</strong> ${this.desconto}%</p>

                <p><strong>Preço com desconto:</strong> 
                    R$ ${precoComDesconto.toFixed(2)}
                </p>
            </div>
        `;

    }

}


const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produto.exibir();

});