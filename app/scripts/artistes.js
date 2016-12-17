import React from 'react';
import { Link } from 'react-router';

import Beyonce from './beyonce';
import SongBox from './songBox';

module.exports = React.createClass({
      render: function() {
          return (
            <div>
                <h2>Artistes</h2>
		<ul>
		<li><Link to={'/songs'}>Songs</Link></li>
		<li><Link to={'/beyonce'}>Beyonce</Link></li>
		</ul>
            </div>
          );
        }
    });
