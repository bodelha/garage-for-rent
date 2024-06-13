const express = require('express');
const path = require('path');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos da pasta 'public'

require('dotenv').config();

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "*****" : null);
console.log("DB_SERVER:", process.env.DB_SERVER);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true
    }
};

// Rota para registro de usuário
app.post('/signup', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        await sql.connect(config);
        const request = new sql.Request();
        request.input('nome', sql.VarChar, nome);
        request.input('email', sql.VarChar, email);
        request.input('senha', sql.VarChar, senha);

        await request.query(`
            INSERT INTO [dbo].[users] (nome, email, senha)
            VALUES (@nome, @email, @senha);
        `);

        res.status(201).send('Usuário cadastrado com sucesso.');
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).send('Erro ao cadastrar usuário.');
    }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        await sql.connect(config);
        const request = new sql.Request();
        request.input('email', sql.VarChar, email);
        const result = await request.query(`
            SELECT * FROM [dbo].[users] WHERE email = @email;
        `);

        const user = result.recordset[0];
        if (user) {
            if (user.senha === senha) {
                res.json({ success: true, user });
            } else {
                res.status(401).send('Senha incorreta.');
            }
        } else {
            res.status(401).send('Usuário não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).send('Erro ao fazer login.');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
