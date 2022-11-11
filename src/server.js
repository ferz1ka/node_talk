import app from './app.js'
import { socketServer } from './socket.js';

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Ntalk rodando na porta ${PORT}...`);
  socketServer(server)
});