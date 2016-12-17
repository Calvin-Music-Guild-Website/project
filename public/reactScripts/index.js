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

import '../css/base.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/beyonce" component={SongBox}/>
        <Route path="/beyonce/:id" component={SongEdit} />
    </Router>
), document.getElementById('content')
);