import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store' 
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginRoute from './LoginRoute'
import Room from './Room'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <div className="app ">
          <Route path="/" exact component={Login} />
          <LoginRoute path="/:roomname" component={Room} />
        </div> 
      </Router> 
    </Provider>
  )
}