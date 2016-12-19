import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
    getInitialState: function() {
        return {title: '', artist: '', lyrics: '', link: ''};
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
    handleSubmit: function(e) {
        e.preventDefault();
        var title = this.state.title.trim();
        var artist = this.state.artist.trim();
        var lyrics = this.state.lyrics.trim();
        var link = this.state.link.trim();
        if ((!title || !artist) || (!lyrics || !link)) {
            return;
        }
        this.props.onSongSubmit({title: title, artist: artist, lyrics: lyrics, link: link});
        this.setState({title: '', artist: '', lyrics: '', link: ''});
    },
    render: function() {
        return (
            <form className="songForm" onSubmit={this.handleSubmit}>
                    <input type="text" id="titleForm" placeholder="title..."
                        value={this.state.title} onChange={this.handleTitleChange}
                    />
                    <input type="text" id="artisteForm" placeholder="artist..."
                        value={this.state.artist} onChange={this.handleArtistChange}
                    />

                    <input type="text" id="linkForm" placeholder="link..."
                        value={this.state.link} onChange={this.handleLinkChange}
                    />

                <textarea rows="30" cols="155" className="lyricsForm" type="text" placeholder="lyrics..."
                    value={this.state.lyrics} onChange={this.handleLyricsChange}/>


                <button type="button"  id="addSongButton" onClick={this.handleSubmit}>Add Song</button>
                </form>

        );
    }
});
