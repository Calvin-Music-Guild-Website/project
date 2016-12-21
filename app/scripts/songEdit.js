/* React is all about modular, composable components.
 * About.js; component for to edit artiste songs
 *
 * @author: Jay Bigelow & Emmanuel Boye
 * @date:   11/29/16
 *
 */

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
            <div>
                <form className="songForm">
                    <h1>Edit Song</h1>
		    <div id="parent">
		    <div class="child">
		    <label>Song Title</label>
		    </div>
		    <div class="child">
                    <input id="titleForm"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
		    </div>
		    <div class="child">
		    <label>Artiste</label>
		    </div>
		    <div class="child">
                    <input id="artisteForm"
                        type="text"
                        value={this.state.artist}
                        onChange={this.handleArtistChange}
                    />
		    </div>
		    <div class="child">
		    <label>Youtube Embed Link</label>
		    </div>
		    <div class="child">
                    <input
                        type="text" id="linkForm"
                        value={this.state.link}
                        onChange={this.handleLinkChange}
                    />
		    </div>
		    <div class="child">
		    <label>Lyrics</label>
		    </div>
		    <div class="child">
                    <textarea rows="30" cols="155"
                        type="lyrics"
                        value={this.state.lyrics}
                        onChange={this.handleLyricsChange}
                    />
		    </div>
		    <div class="child">
                    <button type="button" id="addSongButton" onClick={this.handleUpdate}>Update</button>
                    <button type="button" id="addSongButton" onClick={this.handleDelete}>Delete</button>
		    </div>
		    </div>
                </form>
                <button id="addSongButton" onClick={this.context.router.goBack}>Back</button>
            </div>
        );
    }
});
