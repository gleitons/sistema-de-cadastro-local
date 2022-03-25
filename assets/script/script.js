function cadastrar() {
    const nomeidade = []    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    
    var adicionar = nomeidade.push(`'${nome}', '${idade}'`);

    
    const cont = document.getElementById('results').innerHTML += `${nomeidade}<br>`
    
    //document.getElementById('qtdade').innerHTML += nomeidade;
}
function reset() {
    location.reload()   
}