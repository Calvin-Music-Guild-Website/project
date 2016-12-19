/* React is all about modular, composable components.
 * About.js; component to render songs of all artistes
 *
 * @author: Jay Bigelow & Emmanuel Boye
 * @date:   11/29/16
 *
 */

import React from 'react';
import Remarkable from 'remarkable';
import { Link } from 'react-router';


let imgUrl = '../images/musicCollage.jpg';
const divStyle = {
  width: "100%",
  height: "600",
  position: "static",
  backgroundColor:'rgba(0,0,0,0.2r)',
  zIndex: "1",
  backgroundImage: 'url(' + imgUrl + ')',
};

module.exports = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable({html: true});
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function() {
        return (
          <div>
            <div id="songsContainer">
              <div className="song" >
                <label id="titleLabel">Title</label>
                  <h2 className="songTitle" >
                      {this.props.title}
                  </h2>
                  <label id="artisteLabel">Artiste</label>
                  <h3 className="songArtist" >
                      {this.props.artist}
                  </h3>
                  <label id="lyricsLabel">Media/Lyrics</label>
                  <h4 className="songLink" >
  		              <iframe width="600" height="390" src={this.props.link} frameborder="0" allowfullscreen></iframe>
                  </h4>
                  <span  id="lyrics" dangerouslySetInnerHTML={this.rawMarkup()} />
  		              <Link to={'/' + this.props.id} className="EditLinkButton">Edit</Link>
                    <Link to="/add" className="addSongLink" activeClassName="active">Add Song</Link>
              </div>
            </div>
          </div>
        );
    }
});
