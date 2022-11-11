import { Server } from "socket.io";

export const socketServer = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.on('send-server', (data) => {
      const msg = "<b>" + data.name + ":</b> " + data.msg + "<br/>"
      socket.emit('send-client', msg)
      socket.broadcast.emit('send-client', msg)
    })
  });

}



