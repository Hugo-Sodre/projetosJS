const apiUrl = "https://viacep.com.br/ws/{CEP}/json/";

function consultarCEP() {
    const cepInput = document.getElementById('cep');
    const cep = cepInput.value.replace(/\D/g, '');
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => exibirResultado(data))
        .catch(error => console.error('Erro na requisição:', error));
}

function exibirResultado(data) {
    const resultadoDiv = document.getElementById('resultado');

    if (data.erro) {
        resultadoDiv.innerHTML = 'CEP não encontrado';
    } else {
        resultadoDiv.innerHTML = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade/UF:</strong> ${data.localidade}/${data.uf}</p>
        `;
    }
}