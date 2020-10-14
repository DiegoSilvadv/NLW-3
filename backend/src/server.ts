import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';

import cors from 'cors';

import errorHandler from './errors/handle';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
//rota
//recurso = usuario
// metodos HTTP =get, post, put, delete
// parametros

//query params: http://localhost:3333/users?seach=diego
//route Params: http://localhost:3333/users/1 (identifica um recurso)
//Body: http://localhost:3333/users/





app.listen(3333);
