import { app } from "./app";
import { postUser } from './endpoints/postUser';
import { getUser } from './endpoints/getUser';
import { putUser } from './endpoints/putUser';
import { deleteUser } from './endpoints/deleteUser';

// Rotas CRUD para usuários
app.post('/users', postUser);
app.get('/users', getUser);
app.put('/users/:id', putUser);
app.delete('/users/:id', deleteUser);