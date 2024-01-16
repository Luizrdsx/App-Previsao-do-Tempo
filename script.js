

const key = "cc4b40da7cffbccdee6f8f015c73a3d1"

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo agora em - " + dados.name
    document.querySelector(".temp").innerHTML = HTML =  Math.floor (dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector("umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    cidade + 
    "&appid=" +
    key +
    "&lang=pt_br" + 
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function clickNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}