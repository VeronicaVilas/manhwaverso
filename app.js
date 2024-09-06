function exibirDados(dadosParaExibir) {
    const container = document.getElementById('resultados-pesquisa');
    container.innerHTML = ''; 
    if (dadosParaExibir.length === 0) {
        container.innerHTML = '<p>Nenhum filme encontrado.</p>';
    } else {
        dadosParaExibir.forEach(dado => {
            const item = document.createElement('div');
            item.className = 'item';
            item.style.backgroundImage = `url(${dado.imagem})`;

            const content = document.createElement('div');
            content.className = 'content';

            content.innerHTML = `
                <h2 class="name">${dado.nome}</h2>
                <p class="des">${dado.descricao}</p>
                <p class="des">Ano de lançamento: ${dado.anoLancamento}</p>
                <p class="des">Classificação: ${dado.classificacao}</p>
            `;

            item.appendChild(content);
            container.appendChild(item);
        });
    }
}

function filtrarDados(termo) {
    console.log(`Buscando por: ${termo}`); 
    const termoLower = termo.toLowerCase(); 

    const resultado = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoLower)
    );

    console.log(`Resultado da busca: ${JSON.stringify(resultado)}`);
    exibirDados(resultado);
}

exibirDados(dados);

const inputBusca = document.querySelector('.barra-busca input');
inputBusca.addEventListener('input', (event) => {
    const valorBusca = event.target.value.trim(); // Obtém o valor do input e remove espaços extras
    filtrarDados(valorBusca);
});