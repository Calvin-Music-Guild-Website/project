import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import $ from 'jquery';
import { API_URL } from './global';

module.exports = React.createClass({
  getInitialState: function() {
      return {title: '', artist: '', lyrics: '', link: ''};
  },
  componentDidMount: function() {
      this.loadData();
  },
  componentDidUpdate: function(prevProps) {
      if (this.props.params.id != prevProps.params.id) {
          this.loadData();
      }
  },
  loadData: function() {
      $.ajax(API_URL + "/" + this.props.params.id) .done(function(songs) {
          this.setState(songs[0]);
      }.bind(this));
  },
  handleTitleChange: function(e) {
      this.setState({title: e.target.value});
  },
  handleArtistChange: function(e) {
      this.setState({artist: e.target.value});
  },
  handleLyricsChange: function(e) {
      this.setState({lyrics: e.target.value});
  },
  handleLinkChange: function(e) {
      this.setState({link: e.target.value});
  },
  contextTypes: {
      router: React.PropTypes.object
  },
  handleUpdate: function() {
      var updatedSong = {
          title: this.state.title.trim(),
          artist: this.state.artist.trim(),
          lyrics: this.state.lyrics.trim(),
          link: this.state.link.trim()
      }
      $.ajax({
          url: API_URL + "/" + this.props.params.id,
          dataType: 'json',
          type: 'PUT',
          contentType:'application/json',
          data: JSON.stringify(updatedSong)
      })
       .done(function(songs){
           this.context.router.push('/');
       }.bind(this))
       .fail(function(xhr, status, errorThrown) {
           console.error(API_URL, status, errorThrown.toString());
       }.bind(this));
  },
  handleDelete: function() {
      $.ajax({
          url: API_URL + "/" + this.props.params.id,
          type: 'DELETE',
      })
       .done(function(songs){
           this.context.router.push('/');
       }.bind(this))
       .fail(function(xhr, status, errorThrown) {
           console.error(API_URL, status, errorThrown.toString());
       }.bind(this));
  },
          render: function() {
              return (
                <div >
                  <form action="/login" method="post" className="loginForm">

                      <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required/>

                        <button type="submit">Login</button>
                      </div>

                      <div className="container" id="back">
                      <button onClick={this.context.router.goBack} className="cancelbtn">Cancel</button>
                      </div>
                    </form>
                </div>
              );
            }
        });
