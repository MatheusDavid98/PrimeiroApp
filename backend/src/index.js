const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métados HTTP:
 * GET: buscar/listar uma informação do back-end
 * Post: criar uma informação no back-end
 * Put: alterar uma informação no back-end
 * Delete: deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query params: parâmetros nomeados enviados na rota após "?" (filtros,paginação)
 * Route params: parâmetros utilizados para buscar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */


