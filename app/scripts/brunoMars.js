/* React is all about modular, composable components.
 * About.js; component for artiste
 *
 * @author: Jay Bigelow & Emmanuel Boye
 * @date:   11/29/16
 *
 */

import React from 'react';
import $ from 'jquery';

import BrunoMarsSongs from './brunoMarsSongs';
import SongForm from './songForm';
import { API_URL, POLL_INTERVAL } from './global';


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
          <div className="chancePage">
            <div className="songBox" id="brunoImg">
                <h1 id="brunoMarsTitle">Bruno Mars's Songs</h1>
                  <BrunoMarsSongs data={this.state.data} />
            </div>
          </div>
        );
    }
});
