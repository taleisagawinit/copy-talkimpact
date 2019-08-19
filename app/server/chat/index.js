function init(io) {
  let  users = []
  let rooms = []

  function logout(id) {
    users = users.filter(user => user.id !== id)
  }

  io.on('connection', function (socket) {
    socket.on('login', username => {
      const user = {
        username: username,
        id: socket.id
      }
      users.push(user)
      socket.join('general')

      if (rooms.filter(room => room.name === 'general').length === 0) {
        rooms.push({
          name: 'general',
          users: [user]
        })
      } else {
        rooms.find(room => room.name === 'general').users.push(user)
      }

      io.to('general').emit('new user', {
        room: 'general',
        user: user
      })
    })

    socket.on('join', room => {
      socket.join(room)
    }) 

    socket.on('new message', message => {
      io.to(message.room).emit('new message', message)
    })

    socket.on('logout', () => {
      logout(socket.id)
    })

    socket.on('disconnect', () => {
      logout(socket.id)
    })
  })
}

module.exports = init