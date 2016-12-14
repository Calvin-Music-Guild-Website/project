import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';
import { Link } from 'react-router';

import SongList from './songList';
import SongForm from './songForm';
import { API_URL, POLL_INTERVAL } from './global';

module.exports = React.createClass({
    render: function() {
        return (
            <div className="home">
                <h1>Home</h1>
		<ul>
		<li><Link to={'/songs'}>Songs</Link></li>
		<li><Link to={'/beyonce'}>Beyonce</Link></li>
		</ul>
            </div>
        );
    }
});