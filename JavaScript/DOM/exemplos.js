document.getElementById("conteudo").innerHTML="<p>Olá,mundo DOM!(innerHTML)<\p>";
document.getElementById("mensagem").textContent = "Texto simples, sem HTML.(textContent)";
document.getElementById("foto").setAttribute("src", "https://lumiere-a.akamaihd.net/v1/images/2024_hb_disneyprincess_rapunzel_mobile_3497_78efae8d.jpeg?region=0%2C0%2C1024%2C768")

let url = document.getElementById("link").getAttribute("href");
console.log(url); //"https://music.youtube.com/"

document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");
