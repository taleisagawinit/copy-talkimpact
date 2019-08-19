import store from '../store'
import socket from '../socket'

if (localStorage.getItem('username')) {
  store.dispatch({
    type: 'LOGIN',
    payload: localStorage.getItem('username') 
  })
}

export function setLogin(username) {
  socket.emit('login', username)
  saveUsername(username)
}

export function setLogout() {
  socket.emit('logout')
  removeUsername() 
}

function saveUsername(username) {
  localStorage.setItem('username', username)
  store.dispatch({
    type: 'LOGIN',
    payload: username
  })
}

function removeUsername() {
  localStorage.removeItem('username')
  store.dispatch({
    type: 'LOGOUT' 
  })
}
