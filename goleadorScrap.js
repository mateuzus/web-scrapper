const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://ge.globo.com/sp/futebol/campeonato-paulista/';

axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const tabelaStatus = $('.ranking-item-wrapper');
    const tabelaJogador = [];

    tabelaStatus.each(function(){
        
        const nomeJogador = $(this).find('.jogador-nome').text()
        const timeJogador = $(this).find('.jogador-escudo > img').attr('alt')
        const posicaoJogador = $(this).find('.jogador-posicao').text()
        const numeroGols = $(this).find('.jogador-gols').text()
        const rank = $(this).find('.ranking-item').text() 
        tabelaJogador.push({
            nomeJogador,
            posicaoJogador,
            numeroGols,
            timeJogador,
            rank
        });
    });
    console.log(tabelaJogador);
}).catch(console.error);