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
import { Router, Route, Redirect, browserHistory } from 'react-router';

import SongBox from './songBox';
import SongEdit from './songEdit';
import Home from './home.js';
import Beyonce from './beyonce.js';

import '../css/base.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/beyonce" component={Beyonce} />
        <Route path="/songs" component={SongBox} />
        <Route path="/:id" component={SongEdit} />
    </Router>
), document.getElementById('content')
);