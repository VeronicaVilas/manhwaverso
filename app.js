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
                <p class="info">Ano de publicação: ${dado.anoPublicacao || 'Não informado'}</p>
                <p class="info">Classificação: ${dado.classificacao || 'Não informada'}</p>
            `;

            item.appendChild(conteudo);
            container.appendChild(item);
        });
    }
}

function filtrarDados(termo) {
    const termoLower = termo.toLowerCase(); 

    const resultado = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoLower)
    );

    exibirDados(resultado);

    document.querySelectorAll('.item').forEach(item => {
        const conteudo = item.querySelector('.conteudo');
        if (termo.length >= 1) {
            if (resultado.some(dado => dado.nome === item.querySelector('.nome').textContent)) {
                item.style.display = 'block';
                conteudo.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        } else {
            item.conteudo.style.display = 'block';
        }
    });
}

exibirDados(dados);

const inputBusca = document.querySelector('.barra-busca input');
inputBusca.addEventListener('input', (event) => {
    const valorBusca = event.target.value.trim(); 
    filtrarDados(valorBusca);
});