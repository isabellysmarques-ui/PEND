document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome == "" || email == ""){
        alert("Preencha todos os campos!");
    }else{
        document.getElementById("mensagem").innerHTML =
        "Olá " + nome + "! Seu formulário foi enviado.";
    }

});