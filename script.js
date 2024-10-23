let mudarCor = document.querySelector(".Mudar-Cor")
let trocaAutomatica = document.querySelector(".troca-automatica")
let intervalo = null
let trocandoAuto = false

function trocarCor (){

    let corAleatoria = Math.floor(Math.random()* 16777215).toString(16)
    document.body.style.backgroundColor = "#" + corAleatoria

}

function trocaAuto(){
    if (trocandoAuto) {
        clearInterval(intervalo)
        trocandoAuto = false
        } else {
            intervalo = setInterval(function(){
                let corAleatoria = Math.floor(Math.random()* 16777215).toString(16)
                document.body.style.backgroundColor = "#" + corAleatoria
            }, 600)
        trocandoAuto=true
    }  
}

mudarCor.addEventListener("click",trocarCor)
trocaAutomatica.addEventListener("click", trocaAuto)


