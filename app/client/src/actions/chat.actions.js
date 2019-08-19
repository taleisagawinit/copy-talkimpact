import store from '../store'
import socket from '../socket'

export function sendMessage(message, room) {
  const username = store.getState().loginReducer.username

  const msg = {
    username: username,
    text: message,
    room: room,
    time: new Date()
  }

  socket.emit('new message', msg)
}

export function join(room) {
  socket.emit('join', room)
}

socket.on('new message', message => {
  console.log(message )
  store.dispatch({
    type: 'SEND_MESSAGE',
    payload: message
  })
})

