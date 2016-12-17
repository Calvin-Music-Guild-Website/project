/* React is all about modular, composable components.
 *
 *- SongBox
 * - SongList
 *  - Song
 * - SongForm
 *
 * @author: Jay Bigelow
 * @date:   11/29/16
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, IndexLink, Link } from 'react-router';


import Home from './home';
import Artiste from './artiste';
import Contact from './contact';
import About from './about';
import Login from './login';
import Register from './register';
import App from './app';
import SongForm from './songForm';
import SongBox from './songBox';
import SongEdit from './songEdit';
import Beyonce from './beyonce';

import '../css/style.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="artiste" component={Artiste} />
            <Route path="contact" component={Contact} />
            <Route path="about" component={About} />
            <Route path="login" component={Login} />
            <Route path="songs" component={SongBox} />
            <Route path="add" component={SongForm} />
            <Route path="beyonce" component={Beyonce} />
            <Route path=":id" component={SongEdit} />
        </Route>
    </Router>
), document.getElementById('content')
);