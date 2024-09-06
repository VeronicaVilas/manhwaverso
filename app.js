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

            const conteudo = document.createElement('div');
            conteudo.className = 'conteudo';

            conteudo.innerHTML = `
                <h2 class="nome">${dado.nome}</h2>
                <p class="info">${dado.descricao || 'Descrição não disponível'}</p>
                <p class="info">Ano de lançamento: ${dado.anoLancamento || 'Não informado'}</p>
                <p class="info">Classificação: ${dado.classificacao || 'Não informada'}</p>
            `;

            item.appendChild(conteudo);
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

    exibirDados(resultado);

    document.querySelectorAll('.conteudo').forEach(conteudo => {
        conteudo.style.display = termo ? 'block' : 'none';
    });
}

exibirDados(dados);

const inputBusca = document.querySelector('.barra-busca input');
inputBusca.addEventListener('input', (event) => {
    const valorBusca = event.target.value.trim(); 
    filtrarDados(valorBusca);
});
