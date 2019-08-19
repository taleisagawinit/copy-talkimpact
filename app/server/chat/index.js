function init(io) {
  let  users = []

  function logout(id) {
    users = users.filter(user => user.id !== id)
  }

  io.on('connection', function (socket) {
    socket.on('login', username => {
      const user = {
        username: username,
        id: socket.id
      }
      users.push(user )

      io.emit('new user', user)
    })

    socket.on('logout', () => {
      logout(socket.id)
    })

    socket.on('new message', message => {
      io.emit('new message', message)
    })

    socket.on('disconnect', () => {
      logout(socket.id)
    })
  })
}

module.exports = init