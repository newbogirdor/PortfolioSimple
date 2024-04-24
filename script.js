var iniciar = document.getElementById('button#10')
var img = document.createElement('img')
var res = document.querySelector('div#res')
var botao = document.createElement('button') // botao apos aparecer imagem
var imgAnterior = 'hora_atual2clean.png';
var imgAtual = 'analisador1.png'
function isParam(p){
    if(isParam(p) == 0){
        return true
} else {
    return false
}
}

function testar(p=0){

    res.innerHTML = ''
    res.innerHTML += `<p>Projetos:</p>`
    img.setAttribute('id', 'foto')

    img.setAttribute('src', 'analisador1.png')
    // segunda img img.setAttribute('src', 'hora_atual2clean.png')
    res.appendChild(img)
    res.appendChild(botao)
    
    botao.id = 'meuBotao'
    botao.innerHTML = 'Trocar projeto'
    botao.onclick = function trocar(){
        document.getElementById('foto').src = imgAnterior;
        let aux = imgAtual;
        imgAtual = imgAnterior;
        imgAnterior = aux;
        
        // teste: alert('voce clicou aqui')
    }
    
    
}




/*
res.innerHTML += '<br>'
    res.innerHTML += 'LinkAqui#'
    res.innerHTML += '<br>'
    res.innerHTML += 'segunda'
*/