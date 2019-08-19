import store from '../store'
import socket from '../socket'

export function sendMessage(message, room) {
  const username = store.getState().loginReducer.username

  socket.emit('new message', {
    username: username,
    text: message,
    room: room
    
  })
}

socket.on('new message', message => {
  store.dispatch({
    type: 'SEND_MESSAGE',
    payload: message
  })
})