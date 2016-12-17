import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '60%',
  height: 500,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


module.exports = React.createClass({
      render: function() {
          return (
            <div>
              <div id="spotify">
                <h1 id="favSongs"> Weekly Music Update </h1>
                  <SpotifyPlayer
                    uri="spotify:user:frankboye:playlist:4Aal2iBYqbMkrX64WPoNFZ"
                    size={size}
                    view={view}
                    theme={theme}
                  />
              </div>
                <p>
                  Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
                  Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
                  Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
                </p>

              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
              <div className="footer">
                  <p>Copyright © Eventually something fancy will be put here with all those registered icons® and those things  </p>
              </div>
            </div>
          );
        }
    });
