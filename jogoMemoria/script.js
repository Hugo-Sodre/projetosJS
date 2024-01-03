var origem = 0;
var destino = 0;
var conteudoOrigem = "";
var conteudoDestino = "";



function troca (clicado) {
    if(origem == 0){
        conteudoOrigem = clicado.innerHTML
        origem = clicado
    } else{
        conteudoDestino = clicado.innerHTML
        destino = clicado
    }
    if(origem != 0 && destino != 0){
        origem.innerHTML = conteudoDestino
        destino.innerHTML = conteudoOrigem
        origem = 0
        destino = 0
    }
}