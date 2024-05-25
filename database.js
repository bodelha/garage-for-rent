const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


async function fetchById(tableName, id) {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM ?? WHERE id = ?`, [tableName, id]);
        return rows[0];
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
        throw error;
    }
}

async function insertIntoTable(tableName, data) {
    try {
        const [result] = await pool.query(`INSERT INTO ?? SET ?`, [tableName, data]);
        return result.insertId;
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        throw error;
    }
}

async function updateTableById(tableName, id, data) {
    try {
        const [result] = await pool.query(`UPDATE ?? SET ? WHERE id = ?`, [tableName, data, id]);
        return result.affectedRows;
    } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        throw error;
    }
}

async function deleteFromTableById(tableName, id) {
    try {
        const [result] = await pool.query(`DELETE FROM ?? WHERE id = ?`, [tableName, id]);
        return result.affectedRows;
    } catch (error) {
        console.error('Erro ao deletar dados:', error);
        throw error;
    }
}

module.exports = {
    fetchAllFromTable,
    fetchById,
    insertIntoTable,
    updateTableById,
    deleteFromTableById,
};

