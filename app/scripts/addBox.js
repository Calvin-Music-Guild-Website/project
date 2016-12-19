import React from 'react';
import $ from 'jquery';

import SongForm from './songForm';
import { API_URL, POLL_INTERVAL } from './global';
import { Link } from 'react-router';

module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
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
    },
    handleAdd: function() {
        window.location = '/';
    },
    render: function() {
        return (
            <div className="songBox">
                <h1>Add Song</h1>
                <SongForm onSongSubmit={this.handleSongSubmit} />
            </div>
        );
    }
});