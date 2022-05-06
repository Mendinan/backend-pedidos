const express = require('express');

const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    res.send('Olá Turma. Nossa primeira API REST em NodeJS!');
});

app.get('/mensagem', (req, res) => {
    res.send( [ 
                    {nome: "Joseffe", funcao: "professor"},
                    {nome: "Gião", funcao: "professor"},
            ]);
});

app.post('/inserirCliente', (req, res) => {
    const {nome, idade} = req.body;

    res.send(`O nome do cliente enviado foi ${nome} e sua idade é: ${idade}`);
});
 // "O nome do cliente enviado foi: " + nome + " e sua idade é: " + idade
app.delete('/excluirCliente', (req, res) => {
    

    
})

app.listen(3333, () => {
    console.log("Servidor Backend ON!");
});
