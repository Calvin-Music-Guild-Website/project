/* React is all about modular, composable components.
 * About.js; link to header component
 *
 * @author: Jay Bigelow & Emmanuel Boye
 * @date:   11/29/16
 *
 */

import { IndexLink, Link } from 'react-router';
import React from 'react';
import { StickyContainer, Sticky } from './react-sticky.js';
import Dropdown from 'react-simple-dropdown'


let imgUrl = '../images/pmgmain.jpg';
const divStyle = {
  width: "100%",
  height: "600px",
  position: "relative",
  backgroundImage: 'url(' + imgUrl + ')',
};

var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

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
                  <li><Link to="/artistes" activeClassName="active" className="dropBtn">Arstistes</Link></li>
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
        </div>
        )
      }
    });
