import React, { Component } from 'react';

import { login, resetPassword } from './configurations/config';


function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  
  state = { loginMessage: null }

  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }

  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} 
            </div>
          }
          <div>
            <a onClick={this.resetPassword.bind(this)} className="alert-link pull-right">Forgot Password?</a>
          </div><br /><br /><br />
          <button type="submit" className="btn btn-primary">Sign me in..!</button>
          <button type="submit" className="btn btn-primary pull-right" style={{backgroundColor:"#dd4b39"}}>Google Login</button>
        </form>
      </div>
    )
  }
}