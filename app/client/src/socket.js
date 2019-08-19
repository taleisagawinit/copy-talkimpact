import io from 'socket.io-client'

// MUST CHANGE localhost to IP ADDRESS
const socket = io.connect('http://192.168.0.39:8000')

export default socket