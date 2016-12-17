import { IndexLink, Link } from 'react-router';
import React from 'react';
import { StickyContainer, Sticky } from './react-sticky.js';

 
const divStyle = {
  width: "100%",
  height: "600px",
  position: "relative",
  //backgroundImage: 'url(' + imgUrl + ')',
};

//let imgUrl = './pmgmain.jpg';

module.exports = React.createClass({
      render: function() {
        return (       
          <div style={{ textAlign: 'center' }}>
          <StickyContainer>
            <div style={divStyle}>
              <h1 id="page-title">Pop Music Guild</h1>
            </div>
            <Sticky className="foo" >
              <ul className="header">
                  <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                  <li><Link to="/artiste" activeClassName="active">Arstiste</Link></li>
                  <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                  <li><Link to="/about" activeClassName="active">About</Link></li>
                  <li id="register"><Link to="/register" activeClassName="active">Register</Link></li>
                  <li id="login"><Link to="/login" activeClassName="active">Login</Link></li>              
             </ul>              
            </Sticky>
            <div className="content">
              {this.props.children}
            </div>
          </StickyContainer>
        <div className="footer">
            <p>Copyright © Eventually something fancy will be put here with all those registered icons® and those things  </p>
        </div>
        </div>
        )
      }
    });