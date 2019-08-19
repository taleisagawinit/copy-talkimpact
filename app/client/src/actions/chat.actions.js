import store from '../store'
import socket from '../socket'

export function sendMessage(message) {
  const username = store.getState().loginReducer.username

  socket.emit('new message', {
    username: username,
    text: message
  })
}

socket.on('new message', message => {
  store.dispatch({
    type: 'SEND_MESSAGE',
    payload: message
  })
})