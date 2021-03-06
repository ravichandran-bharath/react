import React, { Component } from 'react';
import logo from '../logo.svg';
import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Home from './home';
import Dashboard from './protected/dashboard';
import Profile from './protected/profile';
import Products from './protected/products';
import Contact from './protected/contact';
import { logout } from './configurations/config';
import { firebaseAuth } from './configurations/firebase';

import AddAdmin from '../Add_Details/admin';
import ModifyAdmin from '../Modify_Details/admin';
import AddOrder from '../Add_Details/addOrder';
import ModifyOrders from '../Modify_Details/orders';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/Login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">Capsule Forte</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <Link to="/" className="navbar-brand">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile" className="navbar-brand">Profile</Link>
                </li>
                <li>
                  <Link to="/products" className="navbar-brand">Products</Link>
                </li>
                <li>
                  <Link to="/contact" className="navbar-brand">Contact</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Capsule Forte Medicines Online Pharmacy</h1>
              <h4 className="App-title">One stop destination for all your medical needs | Easy steps to get your medicines home delivered | Cash on Delivery</h4>
            </header>
          </div>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />

                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/contact' component={Contact} />
                
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <PrivateRoute authed={this.state.authed} path='/profile' component={Profile} />
                <PrivateRoute authed={this.state.authed} path='/products' component={Products} />
                <PrivateRoute authed={this.state.authed} path='/addAdmin' component={AddAdmin} />
                <PrivateRoute authed={this.state.authed} path='/modifyAdmin' component={ModifyAdmin} />
                <PrivateRoute authed={this.state.authed} path='/addOrder' component={AddOrder} />
                <PrivateRoute authed={this.state.authed} path='/modifyOrder' component={ModifyOrders} />
                
                
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}