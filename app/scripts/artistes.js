
/* React is all about modular, composable components.
 * About.js; component for  links artistes
 *
 * @author: Jay Bigelow & Emmanuel Boye
 * @date:   11/29/16
 *
 */

import React from 'react';
import { Link } from 'react-router';

import Beyonce from './beyonce';
import Chance from './chance';
import Adele from './adele';
import BrunoMars from './brunoMars';
import SongBox from './songBox';

module.exports = React.createClass({
      render: function() {
          return (
            <div className="chancePage">
              <div id="artistesImg">
                <div id="artistePageCont">
                    <h2>Artistes</h2>
                		<ul className="artisteHeader">
                		<li><Link to={'/beyonce'}>Beyonce</Link></li>
                    <li><Link to={'/chance'}>Chance The Rapper</Link></li>
                    <li><Link to={'/brunoMars'}>Bruno Mars</Link></li>
                    <li><Link to={'/adele'}>Adele</Link></li>
                		</ul>
                </div>
                <div className="listOfSongs">
                <ul className="list">
                  <li><Link to={'/songs'}>Click here if you want a full list of Songs!</Link></li>
                </ul>
                </div>
              </div>
            </div>
          );
        }
    });
