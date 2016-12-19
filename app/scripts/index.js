/* React is all about modular, composable components.
 * Index.js links to components and renders them
 *- SongBox
 * - SongList
 *  - Song
 * - SongForm
 *
 * @author: Jay Bigelow & Emmanuel Boye
 * @date:   11/29/16
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, IndexLink, Link } from 'react-router';


import Home from './home';
import Artistes from './artistes';
import Contact from './contact';
import About from './about';
import Login from './login';
import Register from './register';
import App from './app';
import SongForm from './songForm';
import SongBox from './songBox';
import SongEdit from './songEdit';
import Beyonce from './beyonce';
import Chance from './chance';
import BrunoMars from './brunoMars';
import Adele from './adele';
import AddBox from './addBox';


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
            <Route path="songs" component={SongBox} />
            <Route path="add" component={AddBox} />
            <Route path="beyonce" component={Beyonce} />
            <Route path="chance" component={Chance} />
            <Route path="brunoMars" component={BrunoMars} />
            <Route path="adele" component={Adele} />
            <Route path=":id" component={SongEdit} />
        </Route>
    </Router>
), document.getElementById('content')
);
