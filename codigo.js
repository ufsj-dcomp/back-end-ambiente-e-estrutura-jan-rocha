var express = require('express');
var app = express();
var path = require('path');

app.get('/aplicativo',function (req, res){ //requisicao get /aplicativo
    res.send('Aplicativo Exemplo!');
});

app.get('/html',function (req, res){ //requisicao get /html
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/imagens',function (req, res){ //requisicao post /imagens
    res.send('Imagem 1 - Imagem 2 - Imagem 3');
});

app.delete('/clientes/10',function (req, res){ //requisicao delete /clientes/10
    res.send('Cliente numero 10 removido com sucesso');
});

app.listen(3000, function(){
    console.log('Aplicacao Web rodando na porta 3000!')
});