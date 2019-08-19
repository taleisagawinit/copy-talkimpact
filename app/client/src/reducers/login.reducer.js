const initialState = {
  username: '',
  authorized: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, username: action.payload, authorized: true }
    case 'LOGOUT':
      return {...state, username:'', authorized: false}
    default:
      return state
  }
}