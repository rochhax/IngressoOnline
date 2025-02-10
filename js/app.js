//@rochhax
/*
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    console.log(qtd);
    
    if (isNaN(qtd) || qtd <= 0){
        alert('Insira um valor valido!')
        return
    }

    if(tipo == 'pista'){
        comprarPista(qtd);
    } else if (tipo == 'superior'){
        comprarSuperior(qtd)
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {   
    if (qtd > pista){
        alert('Quantidade de ingresso indisponivel para pista!')
    } else {
        pista -= qtd;
        document.getElementById('qtd-pista').textContent = pista;
        alert(`Você comprou ${qtd} ingressos Pista!`);
    }
}

function comprarSuperior(qtd) {   
    if (qtd > superior){
        alert('Quantidade de ingresso indisponivel para a parte superior!')
    } else {
        superior -= qtd;
        document.getElementById('qtd-superior').textContent = superior;
        alert(`Você comprou ${qtd} ingressos Superior!`);
    }
}

function comprarInferior(qtd) {   
    if (qtd > inferior){
        alert('Quantidade de ingresso indisponivel para a parte inferior!')
    } else {
        inferior -= qtd;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert(`Você comprou ${qtd} ingressos Inferior!`);
    }
}
    */