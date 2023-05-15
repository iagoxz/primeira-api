function consultaEndereco(){
    let cep = document.querySelector('#cep').value;
    if (cep.length !== 8){
        alert('cep invalido')
        
        return;
    }
    let url = "https://viacep.com.br/ws/"+ cep +"/json";

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data);
        })

    })
     
}

function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p> Endereco: ${dados.logradouro} </p>`
                          `<p> Complemento: ${dados.complemento} </p>`  
                          `<p> Bairro: ${dados.bairro} </p>`
                          `<p> Cidade: ${dados.cidade} </p>`
                          
                          
                          
}