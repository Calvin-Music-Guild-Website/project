import React from 'react';

//set background image
let imgUrl = '../images/zayn.jpg';
const divStyle = {
  // width: "100%",
  flex: "1",
  height: "800",
  position: 'relative',
  bottom: "45px",
  backgroundImage: 'url(' + imgUrl + ')',
};

module.exports = React.createClass({
          render: function() {
              return (
                <div style={divStyle}>
                <div id="aboutText">
                  <h2>HELLO</h2>
                  <p>We are creating a website for Calvin's Pop Music Guild to showcase the artists' work.
                    In order to achieve this, our website will include:
                    A homepage with graphic design similar to popular music groups
                    An about page for the group and the artists
                    A page displaying artists' compositions, including the title, artist or group name,
                    and the lyrics, with optional mp3 or Spotify link.
                  </p>
                  </div>
                </div>
              );
            }
        });
