import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import YouTube from 'react-youtube';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '55%',
  height: 400,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const opts = {
      height: '400',
      width: '55%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

//set background image
let imgUrl = '../images/kend.jpg';
const divStyle = {
  width: "55%",
  height: "400",
  position: "relative",
  left: "320px",
  backgroundImage: 'url(' + imgUrl + ')',
};

module.exports = React.createClass({
    _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  },
      render: function() {
          return (
            <div>
              <div id="spotify">
                <h1 id="favSongs"> Weekly Music Updates </h1>
                  <SpotifyPlayer
                    uri="spotify:user:frankboye:playlist:4Aal2iBYqbMkrX64WPoNFZ"
                    size={size}
                    view={view}
                    theme={theme}
                  />
              </div>
              <div  id="homeContent">
                <p>
                  The Pop Music Guild Website was built by Jay Bigelow and Emmanuel Boye.
                  This website was built as a final project for <strong>cs336: Web development. </strong>
                  Everything you see on this page was built in reactJS with CSS styling.
                  I, personally, am very proud of this page. I have learned A LOT. Building this website.
                  This website initially started out in raw HTML and CSS till we realized we could probably get a C on it.
                  <strong>LOL (VanderLinden wishes) </strong>
                  I think the page has a few cool features.

                  <ul> <strong>The spotify player is pretty rad right!?</strong></ul>

                  REACT, even though it sucks (like a lot), has some cool features.
                  Organizing stuff into components for one I think is very cool. No need to scroll allthe way down
                  to find code to change.
                </p>
                <div style = {divStyle}></div>

                <div id="youtubePlayer">
                  <YouTube
                    videoId="-5slZHLSnow"
                    opts={opts}
                    onReady={this._onReady}
                  />
                  </div>

                <p>As we go further down you do realize that the navigation bar sticks at the top...right?
                That was fairly easy to implement with react. But some other things were a but annoying.
                Like, putting a picture on your website. Trust me. It is very annoying.
                We managed to get very BASIC login and registration stuff to work on our website, YouTube plugins,
                and im still thinking of interesting things to add. Jay did a good job with the react code Facebook gave us.
                He integrated it, and im trying to style it more. We worked seperately on different stuff (AGILE woohoo!)
                , and then came togeher to integrate both files.
                .... Why do I type all this you may ask. Well I just feel so proud about that sticky header, and I just
                want to show it off.
                </p>
                </div>

              <p>"Everything is permitted, Nothing is true."</p>

              <div className="footer">
                  <p>Copyright © Eventually something fancy will be put here with all those registered icons® and those things  </p>
              </div>
            </div>
          );
        }
    });
