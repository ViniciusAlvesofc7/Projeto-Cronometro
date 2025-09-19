let tempo = 0
let intervalo = 0
let rodando = false

function atualizarVisor(){
let horas = Math.floor(tempo / 3600)
let minutos = Math.floor((tempo % 3600) / 60)
let segundos = tempo % 60

let formato = 
(horas < 10 ? "0" + horas : horas) + ":" +
(minutos < 10 ? "0" + minutos : minutos) + ":" +
(segundos < 10 ? "0" + segundos : segundos)

    document.querySelector("h2").innerText = formato
}

function start(){
    if(!rodando) {
        rodando = true
        intervalo = setInterval(()=>{
            tempo++
            atualizarVisor()
        }, 1000)
    }
}

function pause(){
    rodando = false
    clearInterval(intervalo)
}

function stop(){
    rodando = false
    clearInterval(intervalo)
    tempo= 0
    atualizarVisor()
}