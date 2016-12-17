import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './app';
import Home from './home';
import Artistes from './artistes';
import Contact from './contact';
import About from './about';
import Login from './login';
import Register from './register';

import '../css/style.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="artistes" component={Artistes} />
        <Route path="contact" component={Contact} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
    </Route>
  </Router>), document.getElementById('container')
    );
