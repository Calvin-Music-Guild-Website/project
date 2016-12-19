import React from 'react';
import { Link } from 'react-router';

import Beyonce from './beyonce';
import Chance from './chance';
import SongBox from './songBox';

module.exports = React.createClass({
      render: function() {
          return (
            <div>
              <div id="artistePageCont">
                  <h2>Artistes</h2>
              		<ul className="artisteHeader">
              		<li><Link to={'/beyonce'}>Beyonce</Link></li>
                  <li><Link to={'/chance'}>Chance The Rapper</Link></li>
              		</ul>
              </div>
              <div className="listOfSongs">
              <ul className="list">
                <li><Link to={'/songs'}>Click here of you want a full list of Song information for all artistes!</Link></li>
              </ul>
              </div>
            </div>
          );
        }
    });
