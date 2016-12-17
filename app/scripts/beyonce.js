import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import BeyonceSongs from './beyonceSongs';
import SongForm from './songForm';
import { API_URL, POLL_INTERVAL } from './global';

let imgUrl = '../images/beyonce1.jpg';
const divStyle = {
  width: "100%",
  height: "600px",
  position: "relative",
  bottom: "45px",
  backgroundImage: 'url(' + imgUrl + ')',
};

module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadSongsFromServer: function() {
        $.ajax({
            url: API_URL,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    handleSongSubmit: function(song) {
        var songs = this.state.data;
        song.id = Date.now();
        var newSongs = songs.concat([song]);
        this.setState({data: newSongs});
        $.ajax({
            url: API_URL,
            dataType: 'json',
            type: 'POST',
            data: song,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             this.setState({data: songs});
             console.error(API_URL, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.loadSongsFromServer();
        setInterval(this.loadSongsFromServer, POLL_INTERVAL);
    },
    render: function() {
        return (
<<<<<<< HEAD
            <div className="songBox" style={divStyle}>
                <h1 id="beyonceTitle">Beyoncé's Songs</h1>
=======
            <div className="songBox">
                <h1>Beyonce</h1>
>>>>>>> origin/integration
                <BeyonceSongs data={this.state.data} />
                <Link to="/add" activeClassName="active">Add Song</Link>
            </div>
        );
    }
});
